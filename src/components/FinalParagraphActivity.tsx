import React, { useState, FC } from 'react';
import BackButton from './BackButton';
import { generateWritingFeedback } from '../services/geminiService';
import { WritingTopic, SentenceFeedback } from '../types';

interface FinalParagraphActivityProps {
  onComplete: () => void;
  extract: string;
  writingTopic: WritingTopic;
}

const FinalParagraphActivity: FC<FinalParagraphActivityProps> = ({ onComplete, extract, writingTopic }) => {
  const [studentParagraph, setStudentParagraph] = useState('');
  const [feedback, setFeedback] = useState<SentenceFeedback[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGetFeedback = async () => {
    setIsLoading(true);
    setError('');
    setFeedback([]);
    try {
      // Split the student's paragraph into sentences for feedback
      const paragraphSentences = studentParagraph.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0);
      const result = await generateWritingFeedback(writingTopic, paragraphSentences);
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
      <BackButton onClick={onComplete}>Back to Workshop</BackButton> {/* Temporarily go back to workshop */}
      <h2 className="text-2xl font-bold text-center">Final Paragraph Exercise</h2>

      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md space-y-3">
        <h3 className="text-xl font-semibold">Extract from "1984"</h3>
        <p className="italic text-gray-700 dark:text-gray-300 leading-relaxed">
          "{extract}"
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400">
          **Instructions:** Read the extract carefully. Identify any literary devices (e.g., imagery, irony, symbolism, foreshadowing) George Orwell uses. Then, write a well-developed analytical paragraph (5-7 sentences) discussing how Orwell uses these devices to convey a specific theme or character insight.
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400">
          **Clues:**
          <ul>
            <li>Look for figurative language or recurring images.</li>
            <li>Consider the tone and mood of the passage.</li>
            <li>How does this passage reveal something about Winston's struggle or the power of the Party?</li>
            <li>Start with a clear topic sentence (your "Magic Sentence").</li>
          </ul>
        </p>
      </div>

      <h3 className="text-xl font-bold text-center mt-6">Your Analytical Paragraph</h3>
      <textarea
        value={studentParagraph}
        onChange={(e) => setStudentParagraph(e.target.value)}
        className="w-full h-48 p-3 border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="Write your full analytical paragraph here..."
      />

      <div className="text-center">
        <button
          onClick={handleGetFeedback}
          disabled={isLoading || studentParagraph.trim().length < 50} // Require a minimum length for feedback
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Getting Feedback...' : 'Get AI Feedback'}
        </button>
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
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {feedback.length > 0 && (
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Feedback on Your Paragraph</h3>
          {feedback.map((f, index) => (
            <div key={index} className="mb-3 p-3 bg-blue-100 dark:bg-blue-900 rounded-lg shadow-sm border border-blue-300 dark:border-blue-700 text-sm text-blue-800 dark:text-blue-200">
              <p className="font-semibold mb-1">Sentence {f.sentenceIndex + 1}:</p>
              <p>{f.feedback}</p>
            </div>
          ))}
          <div className="text-center mt-4">
            <button onClick={onComplete} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Finish Workshop
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalParagraphActivity;
