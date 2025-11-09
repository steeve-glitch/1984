import React, { useState, useEffect, FC, ChangeEvent } from 'react';
import { StealData } from '../types';

interface StealCharacterizationActivityProps {
  data: StealData;
  onComplete: () => void;
}

const StealCharacterizationActivity: FC<StealCharacterizationActivityProps> = ({ data, onComplete }) => {
  const [placedAnswers, setPlacedAnswers] = useState<Record<string, Record<string, string>>>({});
  const [feedback, setFeedback] = useState<Record<string, Record<string, boolean | null>>>({});
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const initialPlacedAnswers: Record<string, Record<string, string>> = {};
    const initialFeedback: Record<string, Record<string, boolean | null>> = {};
    data.characters.forEach(char => {
      initialPlacedAnswers[char.character] = {};
      initialFeedback[char.character] = {};
      char.categories.forEach(cat => {
        initialPlacedAnswers[char.character][cat.category] = ''; // Use empty string for select default
        initialFeedback[char.character][cat.category] = null;
      });
    });
    setPlacedAnswers(initialPlacedAnswers);
    setFeedback(initialFeedback);
    setIsComplete(false); // Reset completion status when data changes
  }, [data]);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>, character: string, category: string) => {
    const { value } = e.target;
    setPlacedAnswers(prev => ({
      ...prev,
      [character]: {
        ...prev[character],
        [category]: value,
      },
    }));
     // If feedback has been shown, allow user to change answer and reset feedback for that item
     if (feedback[character]?.[category] !== null) {
      setFeedback(prev => ({
          ...prev,
          [character]: {
              ...prev[character],
              [category]: null,
          },
      }));
      setIsComplete(false); // No longer complete if an answer is changed
    }
  };

  const checkAnswers = () => {
    const newFeedback: Record<string, Record<string, boolean>> = {};
    let allCorrect = true;
    data.characters.forEach(char => {
      newFeedback[char.character] = {};
      char.categories.forEach(cat => {
        const isCorrect = placedAnswers[char.character]?.[cat.category] === cat.answer;
        newFeedback[char.character][cat.category] = isCorrect;
        if (!isCorrect) allCorrect = false;
      });
    });
    setFeedback(newFeedback);
    if (allCorrect) {
      setIsComplete(true);
    }
  };
  
  const getSelectClasses = (character: string, category: string) => {
    const base = "font-bold p-2 rounded-md cursor-pointer border-2 appearance-none text-center mx-2";
    const status = feedback[character]?.[category];

    if (status === true) return `${base} bg-green-200 dark:bg-green-800 border-green-500 text-green-800 dark:text-green-200`;
    if (status === false) return `${base} bg-red-200 dark:bg-red-800 border-red-500 text-red-800 dark:text-red-200`;
    
    return `${base} bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none`;
  };

  const allBlanksFilled = Object.values(placedAnswers)
    .flatMap(charAnswers => Object.values(charAnswers))
    .every(val => val && val !== '');

  return (
    <div className="p-4 space-y-6">
      <p className="mb-4 text-center text-gray-600 dark:text-gray-300">Select the best word from each dropdown to complete the sentences.</p>
      
      <div className="space-y-6">
        {data.characters.map(char => (
          <div key={char.character}>
            <h4 className="text-lg font-bold mb-3 text-gray-800 dark:text-white">{char.character}</h4>
            <ul className="space-y-4">
              {char.categories.map(cat => (
                <li key={cat.category} className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold w-full sm:w-28 text-left sm:text-right sm:pr-4 mb-2 sm:mb-0 text-gray-600 dark:text-gray-400">{cat.category}:</span>
                  <span className="leading-relaxed dark:text-gray-300">
                    {cat.sentence.split('___')[0]}
                    <select
                      value={placedAnswers[char.character]?.[cat.category] || ''}
                      onChange={(e) => handleSelectChange(e, char.character, cat.category)}
                      className={getSelectClasses(char.character, cat.category)}
                      aria-label={`Select trait for ${char.character} - ${cat.category}`}
                    >
                      <option value="" disabled>Select...</option>
                      {data.options.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {cat.sentence.split('___')[1]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
        
      <div className="text-center pt-6">
        {isComplete ? (
             <button onClick={onComplete} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Correct! Continue
            </button>
        ) : (
            <button onClick={checkAnswers} disabled={!allBlanksFilled} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed">
                Check Answers
            </button>
        )}
      </div>
    </div>
  );
};

export default StealCharacterizationActivity;