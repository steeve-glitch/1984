import React, { useState, FC } from 'react';
import { VocabQuestion, VocabOption } from '../types';

interface VocabularyActivityProps {
  questions: VocabQuestion[];
  onComplete: () => void;
}

const VocabularyActivity: FC<VocabularyActivityProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<VocabOption | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (option: VocabOption) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      onComplete();
    }
  };

  const isCorrect = selectedOption?.word === currentQuestion.answer;

  const getButtonClass = (option: VocabOption) => {
    if (!isAnswered) {
      return "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600";
    }
    if (option.word === currentQuestion.answer) {
      return "bg-green-500 text-white";
    }
    if (option === selectedOption) {
      return "bg-red-500 text-white";
    }
    return "bg-gray-200 dark:bg-gray-700 opacity-50";
  };

  return (
    <div className="p-4 space-y-6">
      <p className="text-lg text-center text-gray-700 dark:text-gray-300">{currentQuestion.question}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option)}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-md transition-colors ${getButtonClass(option)}`}
          >
            <span className="font-bold text-lg">{option.word}</span>
            <span className="block text-sm mt-1">{option.definition}</span>
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className={`p-4 rounded-md ${isCorrect ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
          <p className={`font-bold ${isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
            {isCorrect ? "Correct!" : "Not Quite."}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            The correct answer is <span className="font-bold">{currentQuestion.answer}</span>.
          </p>
        </div>
      )}

      <div className="text-center mt-6">
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Activity'}
        </button>
      </div>
    </div>
  );
};

export default VocabularyActivity;
