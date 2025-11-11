import React, { useState, useEffect, FC } from 'react';

interface MagicSentenceBuilderActivityProps {
  magicSentenceData: {
    writers: string[];
    verbs: string[];
    techniques: string[];
    connectors: string[];
    purposes: string[];
    themes: string[];
  };
  onComplete: () => void;
}

const MagicSentenceBuilderActivity: FC<MagicSentenceBuilderActivityProps> = ({ magicSentenceData, onComplete }) => {
  const [selectedWriter, setSelectedWriter] = useState<string | null>(null);
  const [selectedVerb, setSelectedVerb] = useState<string | null>(null);
  const [selectedTechnique, setSelectedTechnique] = useState<string | null>(null);
  const [selectedConnector, setSelectedConnector] = useState<string | null>(null);
  const [selectedPurpose, setSelectedPurpose] = useState<string | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const [constructedSentence, setConstructedSentence] = useState<string>('');

  useEffect(() => {
    const sentenceParts = [
      selectedWriter,
      selectedVerb,
      selectedTechnique,
      selectedConnector,
      selectedPurpose,
      selectedTheme,
    ].filter(Boolean); // Filter out null/undefined

    setConstructedSentence(sentenceParts.join(' ') + (sentenceParts.length > 0 ? '.' : ''));
  }, [selectedWriter, selectedVerb, selectedTechnique, selectedConnector, selectedPurpose, selectedTheme]);

  const renderOptions = (title: string, options: string[], selectedOption: string | null, setSelectedOption: (option: string) => void) => (
    <div className="mb-6 p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700">
      <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedOption(option)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedOption === option
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-800 hover:bg-blue-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  const isSentenceComplete = selectedWriter && selectedVerb && selectedTechnique && selectedConnector && selectedPurpose && selectedTheme;

  return (
    <div className="space-y-8 p-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Build Your Magic Sentence</h2>

      {renderOptions('Writer', magicSentenceData.writers, selectedWriter, setSelectedWriter)}
      {renderOptions('Verb', magicSentenceData.verbs, selectedVerb, setSelectedVerb)}
      {renderOptions('Technique', magicSentenceData.techniques, selectedTechnique, setSelectedTechnique)}
      {renderOptions('Connector', magicSentenceData.connectors, selectedConnector, setSelectedConnector)}
      {renderOptions('Purpose', magicSentenceData.purposes, selectedPurpose, setSelectedPurpose)}
      {renderOptions('Theme', magicSentenceData.themes, selectedTheme, setSelectedTheme)}

      <div className="mt-10 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg shadow-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-100">Your Constructed Sentence:</h3>
        <p className="text-lg text-blue-900 dark:text-blue-50 font-mono">
          {constructedSentence || "Select parts to build your sentence..."}
        </p>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={onComplete}
          disabled={!isSentenceComplete}
          className={`px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 ${
            isSentenceComplete
              ? 'bg-green-600 text-white hover:bg-green-700 shadow-md'
              : 'bg-gray-300 text-gray-600 cursor-not-allowed dark:bg-gray-600 dark:text-gray-400'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default MagicSentenceBuilderActivity;