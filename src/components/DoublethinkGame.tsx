import React, { useState, useEffect, FC } from 'react';
import { DOUBLETHINK_GAME_DATA } from '../constants';

interface DoublethinkGameProps {
  onComplete: () => void;
}

const DoublethinkGame: FC<DoublethinkGameProps> = ({ onComplete }) => {
  const [currentRound, setCurrentRound] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DOUBLETHINK_GAME_DATA.rounds[0].timeLimit);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect'; message?: string } | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showRoundIntro, setShowRoundIntro] = useState(true);
  const [passed, setPassed] = useState(false);

  const currentRoundData = DOUBLETHINK_GAME_DATA.rounds[currentRound];
  const currentQuestion = currentRoundData?.questions[currentQuestionIndex];

  // Timer effect
  useEffect(() => {
    if (isGameOver || showRoundIntro) return;

    if (timeLeft <= 0) {
      advanceRound();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isGameOver, showRoundIntro]);

  const advanceRound = () => {
    if (currentRound < DOUBLETHINK_GAME_DATA.rounds.length - 1) {
      const nextRound = currentRound + 1;
      setCurrentRound(nextRound);
      setCurrentQuestionIndex(0);
      setTimeLeft(DOUBLETHINK_GAME_DATA.rounds[nextRound].timeLimit);
      setShowRoundIntro(true);
    } else {
      endGame();
    }
  };

  const endGame = () => {
    setIsGameOver(true);
    const percentage = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;
    setPassed(percentage >= DOUBLETHINK_GAME_DATA.passingScore);
  };

  const handleAnswer = (optionIndex: number) => {
    if (feedback) return;

    const selectedOption = currentQuestion.options[optionIndex];
    const isCorrect = selectedOption.isCorrect;

    setTotalQuestions(prev => prev + 1);

    if (isCorrect) {
      setScore(prev => prev + 10);
      setCorrectAnswers(prev => prev + 1);
      setFeedback({ type: 'correct' });
    } else {
      setFeedback({ type: 'incorrect', message: selectedOption.feedback });
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentQuestionIndex < currentRoundData.questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        advanceRound();
      }
    }, 1500);
  };

  const startRound = () => {
    setShowRoundIntro(false);
  };

  const resetGame = () => {
    setCurrentRound(0);
    setCurrentQuestionIndex(0);
    setTimeLeft(DOUBLETHINK_GAME_DATA.rounds[0].timeLimit);
    setScore(0);
    setTotalQuestions(0);
    setCorrectAnswers(0);
    setFeedback(null);
    setIsGameOver(false);
    setShowRoundIntro(true);
    setPassed(false);
  };

  // Game Over Screen
  if (isGameOver) {
    const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center p-8 max-w-lg">
          {passed ? (
            <>
              <div className="text-6xl mb-4">✓</div>
              <h2 className="text-3xl font-bold text-party-red mb-4 font-mono uppercase tracking-wider">
                ORTHODOXY CONFIRMED
              </h2>
              <p className="text-lg text-gray-300 mb-2">
                Your doublethink is satisfactory.
              </p>
              <p className="text-4xl font-bold text-party-red mb-2">{percentage}%</p>
              <p className="text-sm text-gray-400 mb-6">
                Score: {score} points | {correctAnswers}/{totalQuestions} correct
              </p>
              <p className="text-gray-300 mb-8 italic">
                "The Ministry of Truth has approved your advancement to Part 2."
              </p>
              <button
                onClick={onComplete}
                className="px-8 py-4 bg-party-red text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-colors border-2 border-party-red"
              >
                Proceed to Part 2
              </button>
            </>
          ) : (
            <>
              <div className="text-6xl mb-4">⚠</div>
              <h2 className="text-3xl font-bold text-yellow-500 mb-4 font-mono uppercase tracking-wider">
                INSUFFICIENT ORTHODOXY
              </h2>
              <p className="text-lg text-gray-300 mb-2">
                Your doublethink requires further conditioning.
              </p>
              <p className="text-4xl font-bold text-yellow-500 mb-2">{percentage}%</p>
              <p className="text-sm text-gray-400 mb-2">
                Required: {DOUBLETHINK_GAME_DATA.passingScore}%
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Score: {score} points | {correctAnswers}/{totalQuestions} correct
              </p>
              <p className="text-gray-300 mb-8 italic">
                "The Ministry of Love recommends additional training."
              </p>
              <button
                onClick={resetGame}
                className="px-8 py-4 bg-gray-700 text-white font-bold uppercase tracking-wider hover:bg-gray-600 transition-colors border-2 border-gray-600"
              >
                Retry Conditioning
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  // Round Intro Screen
  if (showRoundIntro) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center p-8 max-w-lg">
          <p className="text-party-red font-mono uppercase tracking-wider mb-2">
            Round {currentRound + 1} of {DOUBLETHINK_GAME_DATA.rounds.length}
          </p>
          <h2 className="text-3xl font-bold text-white mb-6 font-mono uppercase tracking-wider">
            {currentRoundData.title}
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {currentRoundData.instructions}
          </p>
          <div className="text-2xl font-bold text-party-red mb-8">
            Time Limit: {currentRoundData.timeLimit} seconds
          </div>
          <button
            onClick={startRound}
            className="px-8 py-4 bg-party-red text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-colors border-2 border-party-red"
          >
            Begin Round
          </button>
        </div>
      </div>
    );
  }

  // Game Play Screen
  let feedbackClasses = 'border-gray-600 bg-gray-800';
  if (feedback?.type === 'correct') feedbackClasses = 'border-green-500 bg-green-900/50';
  if (feedback?.type === 'incorrect') feedbackClasses = 'border-red-500 bg-red-900/50';

  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="text-sm font-mono uppercase tracking-wider">
          <span className="text-gray-400">Round {currentRound + 1}:</span>{' '}
          <span className="text-white">{currentRoundData.title}</span>
        </div>
        <div className="flex gap-6 text-lg font-bold font-mono">
          <span className="text-party-red">Score: {score}</span>
          <span className={`${timeLeft <= 10 ? 'text-yellow-500 animate-pulse' : 'text-white'}`}>
            {timeLeft}s
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-700 h-2">
        <div
          className="bg-party-red h-2 transition-all duration-300"
          style={{ width: `${((currentQuestionIndex + 1) / currentRoundData.questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className={`p-6 border-2 transition-all duration-300 ${feedbackClasses}`}>
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">
          Question {currentQuestionIndex + 1} of {currentRoundData.questions.length}
        </p>
        <p className="text-xl text-white leading-relaxed font-mono">
          {currentQuestion.prompt}
        </p>
      </div>

      {/* Feedback Message */}
      {feedback && (
        <div className={`p-4 text-center font-mono ${feedback.type === 'correct' ? 'text-green-400' : 'text-red-400'}`}>
          {feedback.type === 'correct' ? (
            <span>✓ ORTHODOX RESPONSE</span>
          ) : (
            <span>✗ {feedback.message || 'THOUGHTCRIME DETECTED'}</span>
          )}
        </div>
      )}

      {/* Answer Options */}
      <div className="grid grid-cols-1 gap-3">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={!!feedback}
            className="w-full p-4 text-left bg-gray-800 border-2 border-gray-600 text-white hover:border-party-red hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-mono"
          >
            <span className="text-party-red mr-3">{String.fromCharCode(65 + index)}.</span>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DoublethinkGame;
