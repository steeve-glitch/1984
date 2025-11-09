import React, { useState, useEffect, FC, useMemo } from 'react';
import { SemanticFieldTerm } from '../types';

interface MatchingGameProps {
  terms: SemanticFieldTerm[];
  onComplete: () => void;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const MatchingGame: FC<MatchingGameProps> = ({ terms, onComplete }) => {
  const [shuffledTerms, setShuffledTerms] = useState<SemanticFieldTerm[]>([]);
  const [shuffledDefs, setShuffledDefs] = useState<SemanticFieldTerm[]>([]);

  const [selectedTerm, setSelectedTerm] = useState<SemanticFieldTerm | null>(null);
  const [selectedDef, setSelectedDef] = useState<SemanticFieldTerm | null>(null);
  const [correctMatches, setCorrectMatches] = useState<string[]>([]);
  const [incorrectMatch, setIncorrectMatch] = useState<[string, string] | null>(null);

  useEffect(() => {
    setShuffledTerms(shuffleArray(terms));
    setShuffledDefs(shuffleArray(terms));
    setCorrectMatches([]);
  }, [terms]);

  useEffect(() => {
    if (selectedTerm && selectedDef) {
      if (selectedTerm.word === selectedDef.word) {
        // Correct match
        setCorrectMatches(prev => [...prev, selectedTerm.word]);
      } else {
        // Incorrect match
        setIncorrectMatch([selectedTerm.word, selectedDef.word]);
        setTimeout(() => setIncorrectMatch(null), 1000);
      }
      // Reset selections
      setSelectedTerm(null);
      setSelectedDef(null);
    }
  }, [selectedTerm, selectedDef]);

  const allMatched = correctMatches.length === terms.length;

  const getButtonClass = (item: SemanticFieldTerm, type: 'term' | 'def') => {
    const base = "w-full text-left p-3 rounded-md transition-colors text-gray-800 dark:text-gray-200";
    const word = item.word;

    if (correctMatches.includes(word)) {
      return `${base} bg-green-200 dark:bg-green-800 opacity-50 cursor-not-allowed`;
    }
    
    if (type === 'term') {
      if (selectedTerm === item) return `${base} bg-blue-300 dark:bg-blue-700 ring-2 ring-blue-500`;
      if (incorrectMatch && incorrectMatch[0] === word) return `${base} bg-red-300 dark:bg-red-700`;
    }
    
    if (type === 'def') {
        if (selectedDef === item) return `${base} bg-yellow-300 dark:bg-yellow-700 ring-2 ring-yellow-500`;
        if (incorrectMatch && incorrectMatch[1] === word) return `${base} bg-red-300 dark:bg-red-700`;
    }
    
    return `${base} bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600`;
  };

  return (
    <div className="p-4 space-y-4">
      <p className="text-center text-gray-600 dark:text-gray-300">Match each word to its correct definition.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
        {/* Column 1: Terms */}
        <div className="space-y-3">
          {shuffledTerms.map(term => (
            <button
              key={`term-${term.word}`}
              onClick={() => setSelectedTerm(term)}
              disabled={correctMatches.includes(term.word)}
              className={getButtonClass(term, 'term')}
            >
              {term.word}
            </button>
          ))}
        </div>
        {/* Column 2: Definitions */}
        <div className="space-y-3">
           {shuffledDefs.map(def => (
            <button
              key={`def-${def.word}`}
              onClick={() => setSelectedDef(def)}
              disabled={correctMatches.includes(def.word)}
              className={getButtonClass(def, 'def')}
            >
              {def.definition}
            </button>
          ))}
        </div>
      </div>

      {allMatched && (
        <div className="text-center pt-6">
            <button onClick={onComplete} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Excellent! Continue
            </button>
        </div>
      )}
    </div>
  );
};

export default MatchingGame;
