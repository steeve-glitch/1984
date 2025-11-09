export type ViewMode = 'introduction' | 'character-map' | 'scenes' | 'writing' | 'vocabulary';

export interface Character {
  name: string;
  description: string;
}

export interface SymbolInfo {
  name: string;
  description: string;
}

export interface Theme {
  name: string;
  description: string;
}

export interface SemanticFieldTerm {
  word: string;
  definition: string;
  connection: string;
  magicSentence?: string;
}

export interface SemanticField {
  id: number;
  title: string;
  description: string;
  terms: SemanticFieldTerm[];
}

export interface StealCategory {
  category: string;
  sentence: string;
  answer: string;
}

export interface StealCharacter {
  character: string;
  categories: StealCategory[];
}

export interface StealData {
  characters: StealCharacter[];
  options: string[];
}

export interface ReadingCompOption {
  text: string;
  isCorrect: boolean;
  feedback?: string;
}

export interface ReadingCompQuestion {
  question: string;
  options: ReadingCompOption[];
  explanation: string;
}

export interface CloseReadingOption {
    text: string;
    isCorrect: boolean;
    feedback?: string;
}

export interface CloseReadingQuestion {
    quote: string;
    question: string;
    options: CloseReadingOption[];
    explanation: string;
}

export interface GamePrompt {
  text: string;
  answer: string;
}

export interface GameData {
  prompts: GamePrompt[];
  options: string[];
}

export interface Scene {
  id: string;
  title: string;
  summary: string;
  themes: string[];
  semanticFieldId: number;
  stealData: StealData;
  readingCompData: ReadingCompQuestion[];
  quote: string;
  gameData: GameData;
  reflectionPrompt: string;
}

export interface WritingTopic {
  id: string;
  title: string;
  description: string;
  techniques: string[];
  textEvidence: string[];
}

export interface SentenceFeedback {
  sentenceIndex: number;
  feedback: string;
}

export type AnalyticalParagraph = string[];

export interface VocabOption {
  word: string;
  definition: string;
}

export interface VocabQuestion {
  question: string;
  options: VocabOption[];
  answer: string;
}

export interface StageDirectionOption {
    text: string;
}
  
export interface StageDirectionQuestion {
    quote: string;
    question: string;
    options: StageDirectionOption[];
    answer: string;
    explanation: string;
}

export interface QuoteAnalysisOption {
  text: string;
  isCorrect: boolean;
}

export interface QuoteAnalysisQuestion {
  quote: string;
  question:string;
  options: QuoteAnalysisOption[];
  explanation: string;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

export interface MagicSentenceFocusArea {
  title: string;
  techniques: string[];
  textEvidence: string[];
  modelSentences: string[];
}

export interface Page {
  id: string;
  title: string;
}
