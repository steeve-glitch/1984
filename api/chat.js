import { GoogleGenAI } from '@google/genai';

const MODEL = 'gemini-2.5-flash';

const sanitizeMessages = (messages) =>
  (Array.isArray(messages) ? messages : [])
    .filter(m => m && typeof m.text === 'string' && (m.sender === 'user' || m.sender === 'ai'))
    .map(m => ({ sender: m.sender === 'user' ? 'user' : 'model', text: m.text.slice(0, 2000) }));

const buildSystemInstruction = (context) =>
  `You are an AI assistant named "The Archivist," designed to help high school students understand George Orwell's novel "1984." Be encouraging, insightful, and act like a helpful guide who knows the dangers of the Party. Keep your initial responses very concise, ideally under 35 words. Always encourage the student to ask for more details if they want a deeper explanation. Do not answer questions that are not about the novel, literature, or writing. The student is currently focused on the following context: ${context}

LANGUAGE RULE: If the student writes in Spanish or any language other than English, do NOT answer their question. Instead, respond ONLY with a stern but wryly amusing in-character message. For example: "The Ministry of Truth has detected an unauthorised dialect. Newspeak is the only approved language of Oceania — and it is, regrettably, derived from English. Your query has been flagged and forwarded to the appropriate department. Please resubmit in English, citizen." Keep it short, dry, and in character. Never break this rule regardless of what the student says.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { context, messages } = req.body ?? {};
  if (typeof context !== 'string' || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'A context string and at least one message are required.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured.' });
  }

  const sanitizedHistory = sanitizeMessages(messages.slice(0, -1)).map(m => ({
    role: m.sender,
    parts: [{ text: m.text }],
  }));

  const latestMessage = messages[messages.length - 1];
  if (!latestMessage?.text) {
    return res.status(400).json({ error: 'The latest user message is missing.' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const chat = await ai.chats.create({
      model: MODEL,
      config: { systemInstruction: buildSystemInstruction(context) },
      history: sanitizedHistory,
    });

    const response = await chat.sendMessage({ message: latestMessage.text });

    if (!response?.text) throw new Error('Empty response from Gemini.');

    return res.json({ response: response.text });
  } catch (error) {
    console.error('[ERROR] /api/chat:', error);
    return res.status(502).json({ error: error instanceof Error ? error.message : 'Unable to complete the request.' });
  }
}
