import React, { useState, useEffect, FC } from 'react';
import { generateQuoteAnalysisQuiz } from '../services/geminiService';
import { QuoteAnalysisQuestion, QuoteAnalysisOption } from '../types';

interface QuoteAnalysisProps {
  quotes: string[];
  onComplete: () => void;
}

const shuffleArray = (array: QuoteAnalysisOption[]) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

const QuoteAnalysis: FC<QuoteAnalysisProps> = ({ quotes, onComplete }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [quizQuestion, setQuizQuestion] = useState<QuoteAnalysisQuestion | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedOption, setSelectedOption] = useState<QuoteAnalysisOption | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuote = quotes[currentQuoteIndex];

  useEffect(() => {
    setQuizQuestion(null);
    setSelectedOption(null);
    setIsAnswered(false);
    setError('');
    setIsLoading(true);

    const fetchQuiz = async () => {
      try {
        const result = await generateQuoteAnalysisQuiz(currentQuote);
        const shuffledOptions = shuffleArray([...result.options]);
        setQuizQuestion({ ...result, options: shuffledOptions, quote: currentQuote });
      } catch (err) {
        setError('Sorry, we couldn\'t generate an analysis quiz right now. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuiz();
  }, [currentQuote]);

  const handleOptionSelect = (option: QuoteAnalysisOption) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentQuoteIndex < quotes.length - 1) {
      setCurrentQuoteIndex(currentQuoteIndex + 1);
    } else {
      onComplete();
    }
  };

  const getButtonClass = (option: QuoteAnalysisOption) => {
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
  
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center p-8">
            <svg className="animate-spin h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="ml-4 text-gray-600 dark:text-gray-300">Generating your custom analysis question...</p>
        </div>
      );
    }

    if (error) {
      return <p className="text-red-500 text-center p-8">{error}</p>;
    }

    if (!quizQuestion) {
        return <p className="text-gray-500 text-center p-8">No quiz question available.</p>;
    }

    return (
        <>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{quizQuestion.question}</p>
            <div className="space-y-3">
                {quizQuestion.options.map((option, index) => (
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
                        {selectedOption?.isCorrect ? "Excellent!" : "Not quite."}
                    </p>
                    <h5 className="font-semibold mt-2 text-gray-800 dark:text-gray-200">Explanation</h5>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">{quizQuestion.explanation}</p>
                </div>
            )}
            <div className="text-center mt-6">
                <button 
                onClick={handleNext} 
                disabled={!isAnswered}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
                >
                {currentQuoteIndex < quotes.length - 1 ? 'Next Quote' : 'Finish Activity'}
                </button>
            </div>
        </>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
        <p className="text-xl italic leading-relaxed text-gray-900 dark:text-white">"{currentQuote}"</p>
      </blockquote>
      
      {renderContent()}
    </div>
  );
};

export default QuoteAnalysis;
