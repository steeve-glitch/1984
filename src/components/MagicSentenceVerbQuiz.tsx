import React, { useState, FC } from 'react';

interface MagicSentenceVerbQuizProps {
  onComplete: () => void;
}

const questions = [
  {
    sentence: 'Through the use of Newspeak Orwell ___ how the citizens are controlled.',
    verbs: ['says', 'shows', 'thinks', 'illustrates'],
    correctVerb: 'illustrates',
  },
  {
    sentence: 'The recurring symbol of the telescreen ___ the total loss of privacy in Oceania.',
    verbs: ['implies', 'emphasizes', 'gives', 'creates'],
    correctVerb: 'emphasizes',
  },
  {
    sentence: 'Winston\'s diary ___ his internal rebellion and desire for individual expression.',
    verbs: ['has', 'is', 'symbolizes', 'makes'],
    correctVerb: 'symbolizes',
  },
  {
    sentence: 'The setting of the novel ___ the claustrophobic and oppressive nature of life under the Party.',
    verbs: ['builds', 'mirrors', 'has', 'does'],
    correctVerb: 'mirrors',
  },
  {
    sentence: 'The character of Big Brother ___ the Party\'s demand for absolute loyalty and worship.',
    verbs: ['personifies', 'shows', 'is', 'has'],
    correctVerb: 'personifies',
  },
];

const MagicSentenceVerbQuiz: FC<MagicSentenceVerbQuizProps> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { verb: string; isCorrect: boolean | null }>>({});

  const handleVerbSelect = (verb: string) => {
    const isCorrect = verb === questions[currentQuestionIndex].correctVerb;
    setAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: { verb, isCorrect },
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const question = questions[currentQuestionIndex];
  const answer = answers[currentQuestionIndex];

  return (
    <div className="p-4 space-y-6">
      <p className="text-lg text-center text-gray-700 dark:text-gray-300">
        Choose the most effective verb to complete the magic sentence.
      </p>
      <div className="text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <p className="text-xl">
          {question.sentence.split('___')[0]}
          <select
            value={answer?.verb || ''}
            onChange={(e) => handleVerbSelect(e.target.value)}
            className="font-bold p-2 rounded-md border-2 bg-gray-200 dark:bg-gray-600 border-gray-400 dark:border-gray-500"
          >
            <option value="" disabled>Select a verb...</option>
            {question.verbs.map(verb => (
              <option key={verb} value={verb}>{verb}</option>
            ))}
          </select>
          {question.sentence.split('___')[1]}
        </p>
      </div>
      <h3 className="text-xl font-bold text-center">Magic Sentence: Verb Quiz ({currentQuestionIndex + 1}/{questions.length})</h3>
      {answer?.isCorrect === true && (
        <div className="p-4 rounded-md bg-green-100 dark:bg-green-900 text-center">
          <p className="font-bold text-green-800 dark:text-green-200">Correct! "{answer.verb}" is a strong, analytical verb.</p>
        </div>
      )}
      {answer?.isCorrect === false && (
        <div className="p-4 rounded-md bg-red-100 dark:bg-red-900 text-center">
          <p className="font-bold text-red-800 dark:text-red-200">Not quite. Try to choose a more analytical verb.</p>
        </div>
      )}
      <div className="text-center">
        <button onClick={handleNext} disabled={answer?.isCorrect === null} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400">
          {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  );
};

export default MagicSentenceVerbQuiz;
