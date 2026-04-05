import React, { useState, FC } from 'react';
import { CloseReadingData } from '../types';

interface Props {
  data: CloseReadingData;
  onComplete: () => void;
}

const CloseReadingActivity: FC<Props> = ({ data, onComplete }) => {
  const [passageIndex, setPassageIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const passage = data.passages[passageIndex];
  const isAnswered = selected !== null;
  const isCorrect = selected !== null && passage.options[selected].isCorrect;
  const isLastPassage = passageIndex === data.passages.length - 1;

  const handleNext = () => {
    if (isLastPassage) {
      onComplete();
    } else {
      setPassageIndex(i => i + 1);
      setSelected(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress indicator */}
      <div className="flex items-center justify-between font-terminal text-[10px] uppercase tracking-widest text-gray-500">
        <span>Passage {passageIndex + 1} of {data.passages.length}</span>
        <div className="flex gap-1">
          {data.passages.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 border ${
                i < passageIndex
                  ? 'bg-green-500 border-green-500'
                  : i === passageIndex
                  ? 'bg-party-red border-party-red'
                  : 'border-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Passage */}
      <div className="border-l-4 border-party-red bg-gray-50 dark:bg-gray-800 p-5">
        <p className="font-terminal text-sm leading-7 text-gray-800 dark:text-gray-200 italic">
          "{passage.passage}"
        </p>
      </div>

      {/* Question */}
      <div>
        <p className="font-terminal text-sm font-bold text-ministry-black dark:text-white mb-4 leading-relaxed">
          {passage.question}
        </p>

        <div className="space-y-2">
          {passage.options.map((opt, i) => {
            const isSelected = selected === i;
            const correct = opt.isCorrect;
            let cls = 'border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white cursor-pointer';
            if (isAnswered) {
              if (correct) cls = 'border-green-600 bg-green-50 dark:bg-green-900/20 cursor-default';
              else if (isSelected) cls = 'border-party-red bg-red-50 dark:bg-red-900/20 cursor-default';
              else cls = 'border-gray-200 dark:border-gray-700 opacity-40 cursor-default';
            }

            return (
              <button
                key={i}
                onClick={() => !isAnswered && setSelected(i)}
                disabled={isAnswered}
                className={`w-full text-left p-4 border-2 font-terminal text-sm transition-all duration-150 ${cls}`}
              >
                <span className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">
                  {isAnswered
                    ? correct
                      ? '✓ CORRECT'
                      : isSelected
                      ? '✗ INCORRECT'
                      : ''
                    : `Option ${String.fromCharCode(65 + i)}`}
                </span>
                <span className={
                  isAnswered && correct
                    ? 'text-green-700 dark:text-green-400'
                    : isAnswered && isSelected
                    ? 'text-party-red'
                    : 'text-gray-800 dark:text-gray-200'
                }>
                  {opt.text}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback */}
      {isAnswered && (
        <div className={`border-2 p-5 space-y-3 ${isCorrect ? 'border-green-600' : 'border-party-red'}`}>
          <p className="font-terminal text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {passage.options[selected!].feedback}
          </p>
          <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
            <p className="text-[10px] font-terminal uppercase tracking-widest text-gray-400 mb-2">Analyst's note</p>
            <p className="font-terminal text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {passage.insight}
            </p>
          </div>
        </div>
      )}

      {isAnswered && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-party-red text-white font-bold font-propaganda uppercase tracking-widest text-sm hover:bg-red-700 transition-colors"
          >
            {isLastPassage ? 'Continue →' : 'Next Passage →'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CloseReadingActivity;
