// This is the final, corrected implementation of the Gemini service.
import { GoogleGenAI, Type, GenerateContentResponse, Content } from "@google/genai";
import {
  QuoteAnalysisQuestion,
  ChatMessage,
  MagicSentenceFocusArea,
  WritingTopic,
  AnalyticalParagraph,
} from '../types';

const model = 'gemini-2.5-flash';

/**
 * Actively waits for the API key to be available on the window.process.env object.
 * This is the robust solution to the race condition where the app's code
 * runs before the platform environment injects the API key.
 * @returns A promise that resolves with the API key string.
 * @throws An error if the key is not found after a 3-second timeout.
 */
const waitForApiKey = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const timeout = 3000; // 3 seconds

    const checkKey = () => {
      // Check for Vite's environment variable first
      const viteApiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (viteApiKey) {
        resolve(viteApiKey);
        return;
      }

      // Fallback to the injected window environment variable
      let windowApiKey: string | undefined = undefined;
      if (
        (window as any).process &&
        (window as any).process.env &&
        (window as any).process.env.API_KEY
      ) {
        windowApiKey = (window as any).process.env.API_KEY;
      }
      
      if (windowApiKey) {
        resolve(windowApiKey);
      } else if (Date.now() - startTime > timeout) {
        reject(new Error("API_KEY IS UNDEFINED. Please ensure the VITE_GEMINI_API_KEY environment variable is set in your .env.local file for local development."));
      } else {
        setTimeout(checkKey, 100); // Poll every 100ms
      }
    };
    checkKey();
  });
};

/**
 * Asynchronously gets an initialized GoogleGenAI client.
 * It first waits for the API key to be available before creating the instance.
 */
const getAiClient = async (): Promise<GoogleGenAI> => {
    const apiKey = await waitForApiKey();
    return new GoogleGenAI({ apiKey });
};


export const getChatbotResponse = async (context: string, messages: ChatMessage[]): Promise<string> => {
  const history: Content[] = messages.slice(0, -1).map(msg => ({
    role: msg.sender === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }]
  }));

  const userMessage = messages[messages.length - 1].text;

  const systemInstruction = `You are an AI assistant named "Mr. Miller," designed to help high school students understand Arthur Miller's play "Death of a Salesman." Be encouraging, insightful, and act like a helpful English teacher. Keep your initial responses very concise, ideally under 35 words. Always encourage the student to ask for more details if they want a deeper explanation. Do not answer questions that are not about the play, literature, or writing. The student is currently focused on the following context: ${context}`;
  
  try {
    const aiInstance = await getAiClient();
    const chat = aiInstance.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: history,
    });
    
    const response: GenerateContentResponse = await chat.sendMessage({ message: userMessage });
    const text = response.text;
    if (!text) {
        throw new Error("API response was empty.");
    }
    return text;
  } catch (error) {
    console.error("Error getting chatbot response:", error);
    // Propagate the original error if it's the API key issue
    if (error instanceof Error && error.message.startsWith("API_KEY IS UNDEFINED")) {
        throw error;
    }
    throw new Error("Failed to get a response from the AI assistant.");
  }
};


export const generateQuoteAnalysisQuiz = async (quote: string): Promise<QuoteAnalysisQuestion> => {
  const prompt = `Analyze the following quote from 'Death of a Salesman' and create one multiple-choice question to test a student's understanding of its significance. The quote is: "${quote}". 
  Provide one correct answer and three plausible but incorrect distractors. Also provide a brief explanation for why the correct answer is right.
  Your response MUST be in JSON format. Do not include markdown formatting like \`\`\`json.`;

  try {
    const aiInstance = await getAiClient();
    const response = await aiInstance.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
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
                  feedback: { type: Type.STRING, description: "Feedback for incorrect answers", nullable: true },
                },
                required: ['text', 'isCorrect'],
              },
            },
            explanation: { type: Type.STRING },
          },
          required: ['question', 'options', 'explanation'],
        },
      },
    });

    const jsonString = response.text;
    if (!jsonString) {
        throw new Error("API response was empty or undefined.");
    }
    const result = JSON.parse(jsonString.trim()) as QuoteAnalysisQuestion;
    return { ...result, quote };
  } catch (error) {
    console.error("Error generating quote analysis quiz:", error);
    if (error instanceof Error && error.message.startsWith("API_KEY IS UNDEFINED")) {
        throw error;
    }
    throw new Error("Failed to generate the quiz question.");
  }
};

export const generateReflectionFeedback = async (question: string, reflection: string): Promise<string> => {
    const prompt = `You are an encouraging and helpful high school English teacher. A student was asked the following question about 'Death of a Salesman': "${question}".
The student wrote this response: "${reflection}".
Provide constructive feedback on their response. Focus on the quality of their analysis, their use of evidence (or lack thereof), and their clarity of expression. Keep the feedback concise, positive, and under 75 words.`;

    try {
        const aiInstance = await getAiClient();
        const response = await aiInstance.models.generateContent({
            model: model,
            contents: prompt,
        });
        const text = response.text;
        if (!text) {
            throw new Error("API response was empty.");
        }
        return text;
    } catch (error) {
        console.error("Error generating reflection feedback:", error);
        if (error instanceof Error && error.message.startsWith("API_KEY IS UNDEFINED")) {
            throw error;
        }
        throw new Error("Failed to get feedback from the AI teacher.");
    }
};

export const generateMagicSentenceFeedback = async (focusArea: MagicSentenceFocusArea, userSentence: string): Promise<string> => {
    const prompt = `You are a high school English teacher helping a student practice writing analytical topic sentences, which we call 'Magic Sentences'.
The formula is: [Author's Name] + [Literary Technique] + [Strong Verb] + [Main Idea/Effect].
The student is focusing on "${focusArea.title}". Their attempt is: "${userSentence}".
Provide specific, constructive feedback on how well their sentence follows the formula and if it's a strong analytical claim. Suggest a specific improvement if needed. Keep feedback concise and encouraging.`;

    try {
        const aiInstance = await getAiClient();
        const response = await aiInstance.models.generateContent({
            model: model,
            contents: prompt,
        });
        const text = response.text;
        if (!text) {
            throw new Error("API response was empty.");
        }
        return text;
    } catch (error) {
        console.error("Error generating magic sentence feedback:", error);
        if (error instanceof Error && error.message.startsWith("API_KEY IS UNDEFINED")) {
            throw error;
        }
        throw new Error("Failed to get feedback from the AI teacher.");
    }
};

export const generateWritingFeedback = async (topic: WritingTopic, paragraph: AnalyticalParagraph): Promise<SentenceFeedback[]> => {
    const prompt = `You are a high school English teacher providing feedback on an analytical paragraph about 'Death of a Salesman'.
The topic is "${topic.title}". Here is the student's paragraph:
${paragraph.map((sentence, index) => `Sentence ${index + 1}: ${sentence}`).join('\n')}

Provide feedback on each sentence. Your feedback should be simplified and easy for a weaker student to understand.
Your response MUST be in JSON format, as an array of objects, where each object has a "sentenceIndex" and "feedback" property. Do not include markdown formatting like \`\`\`json.
For example:
[
  { "sentenceIndex": 0, "feedback": "This is a good start, but could be more specific." },
  { "sentenceIndex": 1, "feedback": "This sentence provides good context." }
]`;

    try {
        const aiInstance = await getAiClient();
        const response = await aiInstance.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            sentenceIndex: { type: Type.NUMBER },
                            feedback: { type: Type.STRING },
                        },
                        required: ['sentenceIndex', 'feedback'],
                    },
                },
            },
        });

        const jsonString = response.text;
        if (!jsonString) {
            throw new Error("API response was empty or undefined.");
        }
        const result = JSON.parse(jsonString.trim()) as SentenceFeedback[];
        return result;
    } catch (error) {
        console.error("Error generating writing feedback:", error);
        if (error instanceof Error && error.message.startsWith("API_KEY IS UNDEFINED")) {
            throw error;
        }
        throw new Error("Failed to get feedback from the AI teacher.");
    }
};