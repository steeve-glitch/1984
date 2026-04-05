export type ViewMode =
  | 'dashboard'
  | 'pre-reading'
  | 'scenes-part1'
  | 'doublethink-game'
  | 'newspeak-lexicon'
  | 'scenes-part2';

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
}

export interface SemanticField {
  id: number;
  title: string;
  description: string;
  terms: SemanticFieldTerm[];
}

export interface NewspeakTerm {
  term: string;
  definition: string;
  significance: string;
}

// ── Close Reading Activity ────────────────────────────────────────────────────

export interface CloseReadingOption {
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface CloseReadingPassage {
  passage: string;
  question: string; // always framed as "What does Orwell achieve/establish by..."
  options: CloseReadingOption[];
  insight: string; // deeper analytical note revealed after answering
}

export interface CloseReadingData {
  passages: CloseReadingPassage[];
}

// ── Paragraph Builder Activity ────────────────────────────────────────────────

export type ParagraphStepId = 'claim' | 'technique' | 'evidence' | 'effect' | 'significance';

export interface ParagraphStep {
  id: ParagraphStepId;
  label: string;
  instruction: string;
  guidedOptions: string[];
  placeholder: string;
}

export interface ParagraphBuilderData {
  focus: string; // the analytical question this paragraph answers
  steps: ParagraphStep[];
  modelParagraph: string; // shown at completion for comparison
}

// ── World Today Activity ──────────────────────────────────────────────────────

export interface WorldTodayData {
  question: string;
  sampleResponses: string[]; // 2–3 examples shown before free write
}

// ── Scene ─────────────────────────────────────────────────────────────────────

export interface Scene {
  id: string;
  title: string;
  summary: string;
  themes: string[];
  quote: string;
  closeReadingData?: CloseReadingData;
  paragraphBuilderData?: ParagraphBuilderData;
  worldTodayData?: WorldTodayData;
}

// ── Chatbot ───────────────────────────────────────────────────────────────────

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

// ── Doublethink Game (unchanged) ──────────────────────────────────────────────

export interface DoublethinkOption {
  text: string;
  isCorrect: boolean;
  feedback?: string;
}

export interface DoublethinkQuestion {
  id: string;
  type: 'contradiction' | 'complete' | 'orthodox';
  prompt: string;
  options: DoublethinkOption[];
  explanation: string;
}

export interface DoublethinkRound {
  title: string;
  instructions: string;
  timeLimit: number;
  questions: DoublethinkQuestion[];
}

export interface DoublethinkGameData {
  rounds: DoublethinkRound[];
  passingScore: number;
}
