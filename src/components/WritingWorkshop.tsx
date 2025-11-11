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
import FinalParagraphActivity from './FinalParagraphActivity'; // Import FinalParagraphActivity
import MagicSentenceBuilderActivity from './MagicSentenceBuilderActivity'; // Import the new activity

const MAGIC_SENTENCE_DATA = {
  writers: [
    'The playwright', 'Arthur Miller', 'The author', 'The persona', 'William Shakespeare',
    'The writer', 'The speaker', 'The novelist', 'The dramatist', 'The screenwriter',
    'The director', 'The poet', 'George Orwell', 'Tim O’Brien', 'Jane Austen', 'Ray Bradbury'
  ],
  verbs: [
    'Uses', 'Chooses', 'Manipulates', 'Takes', 'Employs', 'Utilises', 'Changes', 'Develops',
    'Extends', 'Blends', 'Constructs', 'Creates', 'Portrays', 'Builds', 'Describes', 'Reveals'
  ],
  techniques: [
    'Dramatic irony', 'Dialogue', 'Foreshadowing', 'Flashback', 'motif(s)', 'Symbols (symbolism)',
    'Indirect or direct characterization', 'Tragic flaw', 'Catharsis', 'The props', 'Juxtaposition',
    'Simile / metaphor', 'Imagery / vivid language', 'Personification /antropomorphism', 'Setting',
    'Minor characters', 'Costume', 'Intertextual allusion', 'Onomatopeia', 'Alliteration', 'Rhyme',
    'Assonance', 'High angle shot', 'Lighting', 'Extreme close up', 'Narrative viewpoint', 'Hand-held camera',
    'Plot twist'
  ],
  connectors: [
    'in order to', 'with the intention of', 'with the aim of', 'so as to', 'so that',
    'in an effort to', 'in an attempt to', 'as a means to', 'intending to'
  ],
  purposes: [
    'to show the reader /audience', 'to reinforce', 'to emphasize', 'to illustrate', 'to epitomise',
    'to represent', 'to develop', 'to explore', 'to make the reader aware of', 'to deepen the reader’s understanding of',
    'to teach the reader about', 'to contrast', 'to make the reader realize', 'to make the reader question',
    'to challenge', 'to highlight', 'To illustrate', 'To surface', 'To criticize', 'To convey'
  ],
  themes: [
    'The changing roles between father and son', 'The narrator’s connection with his history and land.',
    'The ability of writing to explore the past.', 'The development of grief.',
    'The role of machines in our lives and our dependence on them.', 'The importance of making the right choices.',
    'How people sometimes choose fantasy to avoid the harshness of reality.',
    'The idea of fate and whether or not people decide their own future.',
    'The importance of believing in ourselves.', 'How reality is found behind apparent reality.',
    'People’s inability to really know each other.', 'People’s willingness to follow the crowd.',
    'How fear can lead people to be unjust and even evil.', 'How people each have their own struggles in life.',
    'The power of friendship and communication.', 'How words can cross boundaries.',
    'How knowledge is power and how that power can be abused.',
    // IB Literary Themes
    'Identity and Self-Discovery (who am I?)', 'Conflict and Power', 'Isolation and Alienation',
    'Love and Relationships', 'Good vs. Evil', 'Freedom and Confinement', 'Memories and the Past',
    'Society and Class', 'Nature and Environment', 'Change and Transformation',
    'Types of conflicts (inner= self, external =society, relationships)'
  ]
};

const exampleParagraph = [
  'Through the use of dialogue Miller shows how the characters feel about their existence.',
  'After having heard the conversation between the Willy and Linda, the audience is introduced to the two sons; Biff and Happy.',
  'While lying in their childhood beds talking about their lives, Biff exclaims that he has a “measly manner of existence.”',
  'This shows how Biff is disillusioned with his life and the expectations of the American Dream.',
  'The author’s choice of words like “measly” effectively conveys a sense of despair and frustration, making the reader question the true cost of the American Dream.',
];

const willyExtract = `Willy:  It's all right. I came back.
Linda:  Why? What happened? Did something happen, Willy?
Willy:  No, nothing happened. You don't have to worry about a thing.
Linda:  But you're home. Why?
Willy:  Well, I got as far as a little above Yonkers. I stopped for a minute to feel the air. The car kept going off to the right, a little too much.
Linda:  Oh. God. Is that all?
Willy:  It's the steering again. I don't know what to do about it, Linda. I'm not making enough money to pay for it.
Linda:  Willy, you've got to break your neck to see a salesman today. But it's changing, Willy, I feel it changing.
Willy:  I hope it is. I need a little hope.`; // Placeholder extract

const WritingWorkshop: FC<WritingWorkshopProps> = ({ writingTopics }) => {
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
              Build a Magic Sentence
            </button>
            <button onClick={() => setStep(7)} className="ml-4 px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
              Skip to Final Exercise
            </button>
          </div>
        );
      case 1:
        return (
          <div>
            <BackButton onClick={() => setStep(0)}>Back</BackButton>
            <MagicSentenceBuilderActivity magicSentenceData={MAGIC_SENTENCE_DATA} onComplete={() => setStep(2)} />
          </div>
        );
      case 2:
        return (
          <div>
            <BackButton onClick={() => setStep(1)}>Back</BackButton>
            <MagicSentenceVerbQuiz onComplete={() => setStep(3)} />
          </div>
        );
      case 3:
        return (
          <div>
            <BackButton onClick={() => setStep(2)}>Back</BackButton>
            <ReportingVerbActivity onComplete={() => setStep(4)} />
          </div>
        );
      case 4:
        return (
          <div className="text-center">
            <BackButton onClick={() => setStep(3)}>Back</BackButton>
            <h2 className="text-2xl font-bold mb-4">Paragraph Builder</h2>
            <p className="text-lg mb-4">
              Now it's time to build your own paragraph. Here's an example of a well-structured paragraph:
            </p>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md mb-4 text-left">
              {exampleParagraph.map((sentence, index) => (
                <p key={index} className="mb-2">{sentence}</p>
              ))}
            </div>
            <p className="text-lg mb-4">
              If you need help, you can ask the chatbot for advice.
            </p>
            <button onClick={() => setStep(5)} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Start Building
            </button>
          </div>
        );
      case 5:
        return (
          <div>
            <BackButton onClick={() => setStep(4)}>Back</BackButton>
            <SentenceBuilder
              topic={writingTopics[0]}
              exampleParagraph={exampleParagraph}
              onComplete={(p) => {
                setParagraph(p);
                setStep(6);
              }}
            />
          </div>
        );
      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-6">Your Paragraph & Feedback</h2>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
              {paragraph.map((sentence, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-4 mb-2"> {/* Changed mb-4 to mb-2 */}
                  {/* Student's Sentence */}
                  <div className="flex-1 text-gray-800 dark:text-gray-200 p-2 rounded-md border bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600"> {/* Added bg and border colors */}
                    <p>{sentence}</p>
                  </div>
                  {/* Feedback for this Sentence */}
                  {feedback.find(f => f.sentenceIndex === index) ? (
                    <div className="md:w-1/3 p-3 bg-blue-100 dark:bg-blue-900 rounded-lg shadow-sm border border-blue-300 dark:border-blue-700 text-sm text-blue-800 dark:text-blue-200"> {/* Changed bg and border colors */}
                      <p className="font-semibold mb-1">Feedback for Sentence {index + 1}:</p>
                      <p>{feedback.find(f => f.sentenceIndex === index)?.feedback}</p>
                    </div>
                  ) : (
                    // Placeholder for sentences without feedback, to maintain layout consistency
                    <div className="md:w-1/3 p-3 invisible"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons and Loading/Error */}
            <div className="text-center mt-6">
              <button
                onClick={handleGetFeedback}
                disabled={isLoading || paragraph.length === 0}
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
                <p className="ml-3 text-gray-600 dark:text-gray-300">Mr. Miller is thinking...</p>
              </div>
            )}
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            {feedback.length > 0 && (
              <div className="text-center mt-4">
                <button onClick={() => setStep(7)} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Continue to Final Exercise
                </button>
              </div>
            )}
          </div>
        );
      case 7:
        return (
          <div>
            <BackButton onClick={() => setStep(6)}>Back to Feedback</BackButton>
            <FinalParagraphActivity
              onComplete={() => setStep(0)} // On completion, go back to start of workshop
              extract={willyExtract}
              writingTopic={writingTopics[0]}
            />
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