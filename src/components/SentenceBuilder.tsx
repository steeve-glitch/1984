import React, { useState, FC } from 'react';
import { WritingTopic } from '../types';

interface SentenceBuilderProps {
  topic: WritingTopic;
  exampleParagraph: string[]; // Added exampleParagraph prop
  onComplete: (paragraph: string[]) => void;
}

const prompts = (topic: WritingTopic) => [
  `Write your "Magic Sentence" (topic sentence) about ${topic.title}.`,
  'Provide some context for the evidence you are about to use.',
  'Integrate a significant text reference using a reporting verb.',
  'Analyze the authorial choices (literary elements).',
  'Evaluate the authorial choice and its effect on the reader (meaning).',
];

const SentenceBuilder: FC<SentenceBuilderProps> = ({ topic, exampleParagraph, onComplete }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [sentences, setSentences] = useState<string[]>([]);
  const [currentSentence, setCurrentSentence] = useState('');

  const handleNext = () => {
    setSentences(prev => [...prev, currentSentence]);
    setCurrentSentence('');
    if (currentSentenceIndex < prompts(topic).length - 1) {
      setCurrentSentenceIndex(prev => prev + 1);
    } else {
      onComplete([...sentences, currentSentence]);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      {/* Left Column: Example Paragraph */}
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-xl font-bold text-center">Example Paragraph</h3>
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-left space-y-2">
          {exampleParagraph.map((sentence, index) => (
            <p
              key={index}
              className={`mb-2 p-2 rounded-md ${
                index === currentSentenceIndex ? 'bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 font-semibold' : ''
              }`}
            >
              {sentence}
            </p>
          ))}
        </div>
      </div>

      {/* Right Column: User Input */}
      <div className="md:w-1/2 space-y-6">
        <h3 className="text-xl font-bold text-center">Paragraph Builder ({currentSentenceIndex + 1}/{prompts(topic).length})</h3>
        <p className="text-md text-center text-gray-600 dark:text-gray-400">
          Before you begin, find the part of the play where the stockings scene takes place.
        </p>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300">
          {prompts(topic)[currentSentenceIndex]}
        </p>
        <textarea
          value={currentSentence}
          onChange={(e) => setCurrentSentence(e.target.value)}
          className="w-full h-32 p-3 border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Write your sentence here..."
        />
        <div className="text-center">
          <button onClick={handleNext} disabled={!currentSentence.trim()} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400">
            {currentSentenceIndex < prompts(topic).length - 1 ? 'Next Sentence' : 'Finish Paragraph'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SentenceBuilder;
