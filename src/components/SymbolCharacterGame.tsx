import React, { useState, useEffect, FC } from 'react';
import { GameData } from '../types';

interface SymbolCharacterGameProps {
    gameData: GameData;
    onComplete: () => void;
}

const GAME_DURATION = 60; // 60 seconds

const SymbolCharacterGame: FC<SymbolCharacterGameProps> = ({ gameData, onComplete }) => {
    const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
    const [score, setScore] = useState(0);
    const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

    useEffect(() => {
        if (isGameOver) return;

        if (timeLeft <= 0) {
            setIsGameOver(true);
            return;
        }

        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, isGameOver]);

    const handleAnswer = (selectedAnswer: string) => {
        if (feedback) return; // Prevent multiple clicks

        const isCorrect = selectedAnswer === gameData.prompts[currentPromptIndex].answer;
        
        if (isCorrect) {
            setScore(prev => prev + 10);
            setFeedback('correct');
        } else {
            setFeedback('incorrect');
        }

        setTimeout(() => {
            setFeedback(null);
            if (currentPromptIndex < gameData.prompts.length - 1) {
                setCurrentPromptIndex(prev => prev + 1);
            } else {
                setIsGameOver(true);
            }
        }, 1000);
    };

    if (isGameOver) {
        return (
            <div className="text-center p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Time's Up!</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Your final score is:</p>
                <p className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">{score}</p>
                <p className="text-md text-gray-600 dark:text-gray-300 mb-6">You've completed the challenge! Click below to finish this activity.</p>
                <button
                    onClick={onComplete}
                    className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
                >
                    Finish Challenge
                </button>
            </div>
        );
    }
    
    let feedbackClasses = '';
    if (feedback === 'correct') feedbackClasses = 'bg-green-100 dark:bg-green-900 border-green-500';
    if (feedback === 'incorrect') feedbackClasses = 'bg-red-100 dark:bg-red-900 border-red-500';

    return (
        <div className="p-4 space-y-6">
            <div className="flex justify-between items-center text-lg font-semibold">
                <div className="text-blue-600 dark:text-blue-400">Score: {score}</div>
                <div className="text-red-600 dark:text-red-400">Time Left: {timeLeft}s</div>
            </div>
            
            <div className={`p-6 my-4 border-l-4 rounded-r-lg transition-colors duration-300 ${feedbackClasses || 'bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600'}`}>
                <p className="text-xl italic leading-relaxed text-gray-900 dark:text-white">
                    "{gameData.prompts[currentPromptIndex].text}"
                </p>
            </div>

            <p className="text-center font-medium text-gray-700 dark:text-gray-300">Who or what is this describing?</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {gameData.options.map(option => (
                    <button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        disabled={!!feedback}
                        className="px-4 py-3 bg-gray-200 dark:bg-gray-600 font-semibold rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-500 disabled:opacity-50"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SymbolCharacterGame;
