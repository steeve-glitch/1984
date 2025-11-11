import {
  QuoteAnalysisQuestion,
  ChatMessage,
  MagicSentenceFocusArea,
  WritingTopic,
  SentenceFeedback,
  AnalyticalParagraph,
} from '../types';

type ChatbotResponse = { response: string };
type QuoteAnalysisResponse = QuoteAnalysisQuestion;
type ReflectionResponse = { feedback: string };
type MagicSentenceResponse = { feedback: string };

const envBaseUrl = import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL =
  (typeof envBaseUrl === 'string' && envBaseUrl.trim().length > 0
    ? envBaseUrl
    : import.meta.env.DEV
      ? 'http://localhost:8787'
      : '') || '';
const DEFAULT_HEADERS = { 'Content-Type': 'application/json' };

const postJson = async <T>(path: string, payload: unknown): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let message = 'The AI service is unavailable right now.';
    try {
      const errorBody = await response.json();
      if (typeof errorBody?.error === 'string') {
        message = errorBody.error;
      }
    } catch {
      // ignore JSON parse errors and fallback to default message
    }
    throw new Error(message);
  }

  return response.json() as Promise<T>;
};

export const getChatbotResponse = async (
  context: string,
  messages: ChatMessage[],
): Promise<string> => {
  const data = await postJson<ChatbotResponse>('/api/chat', { context, messages });
  return data.response;
};

export const generateQuoteAnalysisQuiz = async (
  quote: string,
): Promise<QuoteAnalysisQuestion> => {
  return postJson<QuoteAnalysisResponse>('/api/quote-analysis', { quote });
};

export const generateReflectionFeedback = async (
  question: string,
  reflection: string,
): Promise<string> => {
  const data = await postJson<ReflectionResponse>('/api/reflection-feedback', {
    question,
    reflection,
  });
  return data.feedback;
};

export const generateMagicSentenceFeedback = async (
  focusArea: MagicSentenceFocusArea,
  userSentence: string,
): Promise<string> => {
  const data = await postJson<MagicSentenceResponse>('/api/magic-sentence-feedback', {
    focusArea,
    userSentence,
  });
  return data.feedback;
};

export const generateWritingFeedback = async (
  topic: WritingTopic,
  paragraph: AnalyticalParagraph,
): Promise<SentenceFeedback[]> => {
  return postJson<SentenceFeedback[]>('/api/writing-feedback', {
    topic,
    paragraph,
  });
};
