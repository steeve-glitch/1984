import React, { useState, FC } from 'react';
import { MagicSentenceFocusArea } from '../types';
import { generateMagicSentenceFeedback } from '../services/geminiService';

interface MagicSentenceActivityProps {
  focusArea: MagicSentenceFocusArea;
  onComplete: () => void;
}

const MagicSentenceActivity: FC<MagicSentenceActivityProps> = ({ focusArea, onComplete }) => {
  const [userSentence, setUserSentence] = useState('');
  const [showFormula, setShowFormula] = useState(true);
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleGetFeedback = async () => {
    setIsLoading(true);
    setError('');
    setFeedback('');
    try {
        const result = await generateMagicSentenceFeedback(focusArea, userSentence);
        setFeedback(result);
    } catch (err) {
        setError('Sorry, we couldn\'t get feedback right now. Please try again.');
        console.error(err);
    } finally {
        setIsLoading(false);
    }
  };


  return (
    <div className="p-4 space-y-6">
      {showFormula ? (
        <div className="space-y-4 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300">Let's practice writing an analytical "Magic Sentence" for the topic of <span className="font-bold">{focusArea.title}</span>.</p>
            <div className="p-4 bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 rounded-r-lg">
                <h3 className="font-bold text-lg text-yellow-800 dark:text-yellow-200">The Magic Sentence Formula</h3>
                <p className="mt-2 text-yellow-700 dark:text-yellow-300">[Author's Name] + [Literary Technique] + [Strong Verb] + [Main Idea/Effect].</p>
            </div>
            <button onClick={() => setShowFormula(false)} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Let's Start
            </button>
        </div>
      ) : (
        <div className="space-y-6">
            <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">1. Key Literary Techniques:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    {focusArea.techniques.map(t => <li key={t}>{t}</li>)}
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">2. Relevant Text Evidence:</h4>
                <ul className="space-y-2">
                    {focusArea.textEvidence.map(e => <li key={e} className="italic text-gray-600 dark:text-gray-400">"{e}"</li>)}
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">3. Model Sentences:</h4>
                <ul className="space-y-2">
                    {focusArea.modelSentences.map(s => <li key={s} className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200">{s}</li>)}
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">4. Your Turn:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Using the techniques and evidence above, write your own Magic Sentence.</p>
                <textarea
                    value={userSentence}
                    onChange={(e) => setUserSentence(e.target.value)}
                    className="w-full h-24 p-3 border rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="e.g., George Orwell uses..."
                    disabled={isLoading}
                />
            </div>
             <div className="text-center pt-4 flex flex-col items-center gap-4">
                <button
                    onClick={handleGetFeedback}
                    disabled={userSentence.trim().length < 15 || isLoading}
                    className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'Getting Feedback...' : 'Get AI Feedback'}
                </button>
                {feedback && (
                    <button
                        onClick={onComplete}
                        className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                        Finish & Return to Workshop
                    </button>
                )}
            </div>

            {isLoading && (
                 <div className="flex justify-center items-center p-4">
                    <svg className="animate-spin h-8 w-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="ml-3 text-gray-600 dark:text-gray-300">The Archivist is analyzing...</p>
                </div>
            )}

            {error && <p className="text-red-500 text-center">{error}</p>}

            {feedback && (
                <div className="mt-4 p-4 rounded-md bg-purple-50 dark:bg-gray-800 border-l-4 border-purple-500 space-y-2 animate-fade-in">
                    <h4 className="font-bold text-lg text-purple-800 dark:text-purple-200">AI Teacher Feedback</h4>
                    <p className="text-gray-800 dark:text-gray-200 italic whitespace-pre-wrap">"{feedback}"</p>
                </div>
            )}
        </div>
      )}
    </div>
  );
};

export default MagicSentenceActivity;