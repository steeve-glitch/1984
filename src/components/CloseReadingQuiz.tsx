import React, { useState, FC } from 'react';
import { CloseReadingQuestion, CloseReadingOption } from '../types';

interface CloseReadingQuizProps {
  questions: CloseReadingQuestion[];
  onComplete: () => void;
}

const CloseReadingQuiz: FC<CloseReadingQuizProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<CloseReadingOption | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (option: CloseReadingOption) => {
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

  const getButtonClass = (option: CloseReadingOption) => {
    if (!isAnswered) {
      return "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600";
    }
    if (option.isCorrect) {
      return "bg-green-500 text-white";
    }
    if (option === selectedOption) {
      return "bg-red-500 text-white";
    }
    return "bg-gray-200 dark:bg-gray-700 opacity-50";
  };

  return (
    <div className="p-4 space-y-6">
      <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
        <p className="text-xl italic leading-relaxed text-gray-900 dark:text-white">"{currentQuestion.quote}"</p>
      </blockquote>
      <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{currentQuestion.question}</p>
      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option)}
            disabled={isAnswered}
            className={`w-full text-left p-3 rounded-md transition-colors ${getButtonClass(option)}`}
          >
            {option.text}
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className={`p-4 rounded-md ${selectedOption?.isCorrect ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
          <p className={`font-bold ${selectedOption?.isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
            {selectedOption?.isCorrect ? "Correct!" : "Not Quite."}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            {selectedOption?.isCorrect ? currentQuestion.explanation : (selectedOption?.feedback || currentQuestion.explanation)}
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

export default CloseReadingQuiz;
