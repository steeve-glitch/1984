import React, { useState, FC, MouseEvent } from 'react';
import { Character, SymbolInfo } from '../types';
import { generateReflectionFeedback } from '../services/geminiService';
import ClickableText from './ClickableText';
import CharacterModal from './CharacterModal';
import SymbolModal from './SymbolModal';
import HoverInfo from './HoverInfo';

interface AnalysisReflectionProps {
  onComplete: () => void;
  question?: string;
  expertAnalysis?: string;
  clickableCharacters?: Character[];
  clickableSymbols?: SymbolInfo[];
}

interface HoverState {
  name: string;
  description: string;
  position: { top: number, left: number };
}

const AnalysisReflection: FC<AnalysisReflectionProps> = ({
  onComplete,
  question,
  expertAnalysis,
  clickableCharacters = [],
  clickableSymbols = [],
}) => {
  const [reflection, setReflection] = useState('');
  const [isAnalysisVisible, setAnalysisVisible] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [selectedSymbol, setSelectedSymbol] = useState<SymbolInfo | null>(null);
  const [hoverState, setHoverState] = useState<HoverState | null>(null);
  
  const [aiFeedback, setAiFeedback] = useState('');
  const [isFeedbackLoading, setIsFeedbackLoading] = useState(false);
  const [feedbackError, setFeedbackError] = useState('');

  const findCharacter = (word: string) => {
    // Corrected logic: only find exact full name matches.
    return clickableCharacters.find(c => c.name.toLowerCase() === word.toLowerCase());
  };

  const findSymbol = (word: string) => {
    return clickableSymbols.find(s => s.name.toLowerCase() === word.toLowerCase());
  };

  const handleWordClick = (word: string) => {
    setHoverState(null); // Hide tooltip on click
    const character = findCharacter(word);
    if (character) {
      setSelectedCharacter(character);
      return;
    }
    const symbol = findSymbol(word);
    if (symbol) {
      setSelectedSymbol(symbol);
      return;
    }
  };

  const handleWordHover = (word: string, event: MouseEvent) => {
    const character = findCharacter(word);
    if (character) {
      setHoverState({
        name: character.name,
        description: character.description,
        position: { top: event.clientY, left: event.clientX }
      });
      return;
    }

    const symbol = findSymbol(word);
    if (symbol) {
      setHoverState({
        name: symbol.name,
        description: symbol.description,
        position: { top: event.clientY, left: event.clientX }
      });
      return;
    }
  };

  const handleWordLeave = () => {
    setHoverState(null);
  };
  
  const handleGetFeedback = async () => {
      if (!question) return;
      setIsFeedbackLoading(true);
      setFeedbackError('');
      try {
          const feedback = await generateReflectionFeedback(question, reflection);
          setAiFeedback(feedback);
      } catch (err) {
          setFeedbackError('Sorry, we couldn\'t get feedback right now. Please try again.');
          console.error(err);
      } finally {
          setIsFeedbackLoading(false);
      }
  };

  const characterNames = clickableCharacters.map(c => c.name);
  const symbolNames = clickableSymbols.map(s => s.name);
  const allClickableWords = [...new Set([...characterNames, ...symbolNames])];

  // Guided analysis with question
  if (question) {
    const hasWrittenEnough = reflection.trim().length > 20;

    return (
      <div className="p-4 space-y-4">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <ClickableText
            text={question}
            clickableWords={allClickableWords}
            onWordClick={handleWordClick}
            onWordHover={handleWordHover}
            onWordLeave={handleWordLeave}
          />
        </p>
        <textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          className="w-full h-48 p-3 border rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Write your analysis here (at least 20 characters)..."
          aria-label="Your analysis"
          readOnly={isFeedbackLoading}
        />
        
        <div className="pt-4">
            {isFeedbackLoading ? (
                 <div className="flex justify-center items-center p-4">
                    <svg className="animate-spin h-8 w-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="ml-3 text-gray-600 dark:text-gray-300">Your teacher is thinking...</p>
                </div>
            ) : (
                <div className="flex justify-center items-center gap-4 flex-wrap">
                    <button
                        onClick={handleGetFeedback}
                        disabled={!hasWrittenEnough}
                        className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {aiFeedback ? 'Revise & Get New Feedback' : 'Get AI Feedback'}
                    </button>
                    {aiFeedback && (
                        <button 
                            onClick={onComplete} 
                            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          Continue
                        </button>
                    )}
                </div>
            )}
        </div>

        {feedbackError && <p className="text-red-500 text-center">{feedbackError}</p>}

        {aiFeedback && (
            <div className="mt-4 p-4 rounded-md bg-purple-50 dark:bg-gray-700 border border-purple-200 dark:border-gray-600 space-y-2">
                <h4 className="font-bold text-purple-800 dark:text-purple-200">AI Teacher Feedback</h4>
                <p className="text-gray-800 dark:text-gray-300 italic">"{aiFeedback}"</p>
            </div>
        )}

        {aiFeedback && expertAnalysis && !isAnalysisVisible && (
          <div className="text-center">
            <button
              onClick={() => setAnalysisVisible(true)}
              className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Reveal Expert Analysis
            </button>
          </div>
        )}

        {expertAnalysis && isAnalysisVisible && (
          <div className="mt-4 p-4 rounded-md bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 space-y-2">
            <h4 className="font-bold text-blue-800 dark:text-blue-200">Expert Analysis</h4>
            <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
                <ClickableText
                    text={expertAnalysis}
                    clickableWords={allClickableWords}
                    onWordClick={handleWordClick}
                    onWordHover={handleWordHover}
                    onWordLeave={handleWordLeave}
                />
            </p>
          </div>
        )}
        
        {hoverState && <HoverInfo {...hoverState} />}
        <CharacterModal character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
        <SymbolModal symbol={selectedSymbol} onClose={() => setSelectedSymbol(null)} />
      </div>
    );
  }

  // Fallback for simple reflection without AI feedback (if needed)
  const isComplete = reflection.trim().length > 50;
  return (
    <div className="p-4 space-y-4">
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Think about everything you've learned about Willy Loman. In your own words, what do you think is the main reason for his tragedy? Is it his own fault, the fault of society, or something else?
      </p>
      <textarea
        value={reflection}
        onChange={(e) => setReflection(e.target.value)}
        className="w-full h-48 p-3 border rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="Write your reflection here (at least 50 characters)..."
      />
      <p className="text-sm text-gray-500 dark:text-gray-400 text-right">
        Characters: {reflection.length} / 50
      </p>
      <div className="text-center pt-4">
        <button
          onClick={onComplete}
          disabled={!isComplete}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Complete Module
        </button>
      </div>
    </div>
  );
};

export default AnalysisReflection;