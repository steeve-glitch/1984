import compression from 'compression';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';
import cors from 'cors'; // Import cors

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

dotenv.config();
const localEnvPath = path.join(rootDir, '.env.local');
if (fs.existsSync(localEnvPath)) {
  dotenv.config({ path: localEnvPath, override: true });
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.API_KEY;
if (!GEMINI_API_KEY) {
  console.error(
    '[FATAL] Missing GEMINI_API_KEY or API_KEY environment variable. Refusing to start server.',
  );
  process.exit(1);
}

const MODEL = 'gemini-2.5-flash';
const REQUEST_TIMEOUT_MS = Number(process.env.GEMINI_TIMEOUT_MS ?? 20000);
const PORT = Number(process.env.API_PORT || process.env.PORT || 8080);

const app = express();
app.use(compression());
app.use(express.json({ limit: '1mb' }));

// Configure CORS
app.use(
  cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

const aiClient = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const withTimeout = async (promise, message) => {
  let timeoutId;
  try {
    return await Promise.race([
      promise,
      new Promise((_, reject) => {
        timeoutId = setTimeout(() => reject(new Error(message)), REQUEST_TIMEOUT_MS);
      }),
    ]);
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
};

const sanitizeMessages = (messages) => {
  if (!Array.isArray(messages)) {
    return [];
  }
  return messages
    .filter(
      (message) =>
        message &&
        typeof message.text === 'string' &&
        (message.sender === 'user' || message.sender === 'ai'),
    )
    .map((message) => ({
      sender: message.sender === 'user' ? 'user' : 'model',
      text: message.text.slice(0, 2000),
    }));
};

const buildChatSystemInstruction = (context) =>
  `You are an AI assistant named "Mr. Miller," designed to help high school students understand Arthur Miller's play "Death of a Salesman." Be encouraging, insightful, and act like a helpful English teacher. Keep your initial responses very concise, ideally under 35 words. Always encourage the student to ask for more details if they want a deeper explanation. Do not answer questions that are not about the play, literature, or writing. The student is currently focused on the following context: ${context}`;

app.post('/api/chat', async (req, res) => {
  const { context, messages } = req.body ?? {};
  if (typeof context !== 'string' || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'A context string and at least one message are required.' });
  }

  const sanitizedHistory = sanitizeMessages(messages.slice(0, -1)).map((msg) => ({
    role: msg.sender,
    parts: [{ text: msg.text }],
  }));
  const latestMessage = messages[messages.length - 1];
  if (!latestMessage || typeof latestMessage.text !== 'string') {
    return res.status(400).json({ error: 'The latest user message is missing.' });
  }

  try {
    const chat = await aiClient.chats.create({
      model: MODEL,
      config: { systemInstruction: buildChatSystemInstruction(context) },
      history: sanitizedHistory,
    });

    const response = await withTimeout(
      chat.sendMessage({ message: latestMessage.text }),
      'Timed out while waiting for the AI teacher.',
    );

    if (!response?.text) {
      throw new Error('Empty response from Gemini.');
    }

    return res.json({ response: response.text });
  } catch (error) {
    console.error('[ERROR] /api/chat failed:', error);
    const message =
      error instanceof Error ? error.message : 'Unable to complete the request right now.';
    return res.status(502).json({ error: message });
  }
});

app.post('/api/quote-analysis', async (req, res) => {
  const { quote } = req.body ?? {};
  if (typeof quote !== 'string' || quote.trim().length === 0) {
    return res.status(400).json({ error: 'A quote is required to build the quiz.' });
  }

  const prompt = `Analyze the following quote from 'Death of a Salesman' and create one multiple-choice question to test a student's understanding of its significance. The quote is: "${quote}".
Provide one correct answer and three plausible but incorrect distractors. Also provide a brief explanation for why the correct answer is right.
Your response MUST be in JSON format. Do not include markdown formatting like \\\`\\\`\\\`json.`;

  try {
    const response = await withTimeout(
      aiClient.models.generateContent({
        model: MODEL,
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              options: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    text: { type: Type.STRING },
                    isCorrect: { type: Type.BOOLEAN },
                    feedback: {
                      type: Type.STRING,
                      description: 'Feedback for incorrect answers',
                      nullable: true,
                    },
                  },
                  required: ['text', 'isCorrect'],
                },
              },
              explanation: { type: Type.STRING },
            },
            required: ['question', 'options', 'explanation'],
          },
        },
      }),
      'Timed out while generating the quiz.',
    );

    if (!response?.text) {
      throw new Error('Gemini returned an empty payload.');
    }

    const parsed = JSON.parse(response.text.trim());
    return res.json({ ...parsed, quote });
  } catch (error) {
    console.error('[ERROR] /api/quote-analysis failed:', error);
    const message =
      error instanceof Error ? error.message : 'Unable to generate the quiz right now.';
    return res.status(502).json({ error: message });
  }
});

app.post('/api/reflection-feedback', async (req, res) => {
  const { question, reflection } = req.body ?? {};
  if (typeof question !== 'string' || typeof reflection !== 'string') {
    return res.status(400).json({ error: 'Both the question and reflection are required.' });
  }

  const prompt = `You are an encouraging and helpful high school English teacher. A student was asked the following question about 'Death of a Salesman': "${question}".
The student wrote this response: "${reflection}".
Provide constructive feedback on their response. Focus on the quality of their analysis, their use of evidence (or lack thereof), and their clarity of expression. Keep the feedback concise, positive, and under 75 words.`;

  try {
    const response = await withTimeout(
      aiClient.models.generateContent({
        model: MODEL,
        contents: prompt,
      }),
      'Timed out while preparing reflection feedback.',
    );

    if (!response?.text) {
      throw new Error('Gemini returned an empty payload.');
    }

    return res.json({ feedback: response.text });
  } catch (error) {
    console.error('[ERROR] /api/reflection-feedback failed:', error);
    const message =
      error instanceof Error ? error.message : 'Unable to generate feedback right now.';
    return res.status(502).json({ error: message });
  }
});

app.post('/api/writing-feedback', async (req, res) => {
  const { topic, paragraph } = req.body ?? {};
  const sentences =
    Array.isArray(paragraph) && paragraph.length > 0
      ? paragraph
          .map((sentence) => (typeof sentence === 'string' ? sentence.trim() : ''))
          .filter((sentence) => sentence.length > 0)
      : [];

  if (
    !topic ||
    typeof topic.title !== 'string' ||
    topic.title.trim().length === 0 ||
    sentences.length === 0
  ) {
    return res.status(400).json({
      error: 'A writing topic and at least one paragraph sentence are required.',
    });
  }

  const topicLines = [
    `Title: ${topic.title}`,
    topic.description ? `Description: ${topic.description}` : null,
    Array.isArray(topic.techniques) && topic.techniques.length > 0
      ? `Suggested Techniques: ${topic.techniques.join(', ')}`
      : null,
    Array.isArray(topic.textEvidence) && topic.textEvidence.length > 0
      ? `Supporting Evidence: ${topic.textEvidence.join(' | ')}`
      : null,
  ]
    .filter(Boolean)
    .join('\n');

  const formattedParagraph = sentences.map((sentence, index) => `${index + 1}. ${sentence}`).join('\n');

  const prompt = `You are an encouraging high-school English teacher helping a student refine an analytical paragraph about \"Death of a Salesman\".
Use the topic information and the student's paragraph to give specific feedback on EACH sentence.
Respond with JSON only, as an array of objects following this schema:
[
  { "sentenceIndex": <zero-based-index>, "feedback": "<concise guidance (max 40 words)>" }
]

Topic details:
${topicLines}

Student paragraph:
${formattedParagraph}`;

  try {
    const response = await withTimeout(
      aiClient.models.generateContent({
        model: MODEL,
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                sentenceIndex: { type: Type.INTEGER },
                feedback: { type: Type.STRING },
              },
              required: ['sentenceIndex', 'feedback'],
            },
            maxItems: Math.min(sentences.length, 8),
          },
        },
      }),
      'Timed out while generating writing feedback.',
    );

    if (!response?.text) {
      throw new Error('Gemini returned an empty payload.');
    }

    const parsed = JSON.parse(response.text.trim());
    return res.json(parsed);
  } catch (error) {
    console.error('[ERROR] /api/writing-feedback failed:', error);
    const message =
      error instanceof Error ? error.message : 'Unable to generate writing feedback right now.';
    return res.status(502).json({ error: message });
  }
});

app.post('/api/magic-sentence-feedback', async (req, res) => {
  const { focusArea, userSentence } = req.body ?? {};
  if (
    !focusArea ||
    typeof focusArea.title !== 'string' ||
    typeof userSentence !== 'string' ||
    userSentence.trim().length === 0
  ) {
    return res.status(400).json({ error: 'A focus area and sentence are required.' });
  }

  const prompt = `You are a high school English teacher helping a student practice writing analytical topic sentences, which we call 'Magic Sentences'.
The formula is: [Author's Name] + [Literary Technique] + [Strong Verb] + [Main Idea/Effect].
The student is focusing on "${focusArea.title}". Their attempt is: "${userSentence}".
Provide specific, constructive feedback on how well their sentence follows the formula and if it's a strong analytical claim. Suggest a specific improvement if needed. Keep feedback concise and encouraging.`;

  try {
    const response = await withTimeout(
      aiClient.models.generateContent({
        model: MODEL,
        contents: prompt,
      }),
      'Timed out while generating sentence feedback.',
    );

    if (!response?.text) {
      throw new Error('Gemini returned an empty payload.');
    }

    return res.json({ feedback: response.text });
  } catch (error) {
    console.error('[ERROR] /api/magic-sentence-feedback failed:', error);
    const message =
      error instanceof Error ? error.message : 'Unable to generate feedback right now.';
    return res.status(502).json({ error: message });
  }
});

if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    return res.sendFile(path.join(distDir, 'index.html'));
  });
} else {
  console.warn('[WARN] dist/ not found. The server is running in API-only mode.');
}

app.listen(PORT, () => {
  console.log(`[INFO] Server listening on port ${PORT}`);
});
