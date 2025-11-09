import React, { useState, FC } from 'react';
import { ReadingCompQuestion, ReadingCompOption } from '../types';

interface ReadingCompQuizProps {
  questions: ReadingCompQuestion[];
  onComplete: () => void;
}

const ReadingCompQuiz: FC<ReadingCompQuizProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<ReadingCompOption | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showTryAgain, setShowTryAgain] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (option: ReadingCompOption) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
    if (!option.isCorrect) {
      setShowTryAgain(true);
    }
  };

  const handleTryAgain = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setShowTryAgain(false);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowTryAgain(false);
    } else {
      onComplete();
    }
  };

  const getButtonClass = (option: ReadingCompOption) => {
    if (!isAnswered) {
      return "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600";
    }
    
    if (option === selectedOption) {
      // Only color the selected option
      return option.isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white";
    }

    // All other options remain neutral but disabled
    return "bg-gray-200 dark:bg-gray-700 opacity-50";
  };

  return (
    <div className="p-4 space-y-6">
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
            {selectedOption?.isCorrect ? "That's correct!" : "Not quite."}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            {selectedOption?.isCorrect ? currentQuestion.explanation : selectedOption?.feedback}
          </p>
        </div>
      )}

      <div className="text-center">
        {showTryAgain ? (
          <button 
            onClick={handleTryAgain} 
            className="px-6 py-2 bg-yellow-500 text-black dark:text-white rounded hover:bg-yellow-600"
          >
            Try Again
          </button>
        ) : (
          <button 
            onClick={handleNext} 
            disabled={!isAnswered || !selectedOption?.isCorrect}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Activity'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ReadingCompQuiz;
