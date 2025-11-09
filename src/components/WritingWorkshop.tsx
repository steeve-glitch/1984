import React, { useState, FC } from 'react';
import Card from './Card';
import { WritingTopic, MagicSentenceFocusArea } from '../types';
import ClickableText from './ClickableText';

interface WritingWorkshopProps {
  writingTopics: WritingTopic[];
  magicSentenceFocusAreas: MagicSentenceFocusArea[];
}

import MagicSentenceVerbQuiz from './MagicSentenceVerbQuiz';

import ReportingVerbActivity from './ReportingVerbActivity';

import SentenceBuilder from './SentenceBuilder';

import { generateWritingFeedback } from '../services/geminiService';

import BackButton from './BackButton';

const WritingWorkshop: FC<WritingWorkshopProps> = ({ writingTopics, magicSentenceFocusAreas }) => {
  const [step, setStep] = useState(0);
  const [paragraph, setParagraph] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<SentenceFeedback[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGetFeedback = async () => {
    setIsLoading(true);
    setError('');
    setFeedback([]);
    try {
      const result = await generateWritingFeedback(writingTopics[0], paragraph);
      setFeedback(result);
    } catch (err) {
      setError('Sorry, we couldn\'t get feedback right now. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">The "Magic Sentence"</h2>
            <p className="text-lg mb-4">
              The "Magic Sentence" is a powerful tool for literary analysis. It follows a simple formula:
            </p>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md mb-4">
              <ClickableText
                text="[Author] uses [literary device] to [show/reveal/etc.] [theme/idea]."
                highlights={[
                  { text: '[Author]', info: 'The writer of the text.' },
                  { text: '[literary device]', info: 'A technique used by the writer to create an effect.' },
                  { text: '[show/reveal/etc.]', info: 'A strong verb that describes the author\'s action.' },
                  { text: '[theme/idea]', info: 'The main idea or message the author is conveying.' },
                ]}
              />
            </div>
            <button onClick={() => setStep(1)} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Next
            </button>
          </div>
        );
      case 1:
        return (
          <div>
            <BackButton onClick={() => setStep(0)}>Back</BackButton>
            <MagicSentenceVerbQuiz onComplete={() => setStep(2)} />
          </div>
        );
      case 2:
        return (
          <div>
            <BackButton onClick={() => setStep(1)}>Back</BackButton>
            <ReportingVerbActivity onComplete={() => setStep(3)} />
          </div>
        );
      case 3:
        return (
          <div className="text-center">
            <BackButton onClick={() => setStep(2)}>Back</BackButton>
            <h2 className="text-2xl font-bold mb-4">Paragraph Builder</h2>
            <p className="text-lg mb-4">
              Now it's time to build your own paragraph. Here's an example of a well-structured paragraph:
            </p>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md mb-4 text-left">
              <p className="mb-2">Through the use of dialogue Miller shows how the characters feel about their existence.</p>
              <p className="mb-2">After having heard the conversation between the Willy and Linda, the audience is introduced to the two sons; Biff and Happy.</p>
              <p className="mb-2">While lying in their childhood beds talking about their lives, Biff exclaims that he has a “measly manner of existence.”</p>
              <p className="mb-2">This shows how Biff is disillusioned with his life and the expectations of the American Dream.</p>
              <p className="mb-2">The author’s choice of words like “measly” effectively conveys a sense of despair and frustration, making the reader question the true cost of the American Dream.</p>
            </div>
            <p className="text-lg mb-4">
              If you need help, you can ask the chatbot for advice.
            </p>
            <button onClick={() => setStep(4)} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Start Building
            </button>
          </div>
        );
      case 4:
        return (
          <div>
            <BackButton onClick={() => setStep(3)}>Back</BackButton>
            <SentenceBuilder onComplete={(p) => {
              setParagraph(p);
              setStep(5);
            }} />
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Your Paragraph</h2>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
              {paragraph.map((sentence, index) => (
                <div key={index} className="mb-4 relative">
                  <p className="mb-2">{sentence}</p>
                  {feedback.find(f => f.sentenceIndex === index) && (
                    <div className="absolute -left-4 -top-4 bg-purple-200 text-purple-800 text-sm p-2 rounded-lg shadow-lg" style={{ width: '150px' }}>
                      {feedback.find(f => f.sentenceIndex === index)?.feedback}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <button
                onClick={handleGetFeedback}
                disabled={isLoading}
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
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
                <p className="ml-3 text-gray-600 dark:text-gray-300">Mr. Miller is thinking...</p>
              </div>
            )}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {feedback.length > 0 && (
              <div className="text-center">
                <button onClick={() => setStep(0)} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Start Over
                </button>
              </div>
            )}
          </div>
        );
      default:
        return <div>More steps to come...</div>;
    }
  };

  return (
    <Card title="Writing Workshop">
      <div className="p-4">
        {renderStep()}
      </div>
    </Card>
  );
};

export default WritingWorkshop;