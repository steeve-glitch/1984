import React, { useState, FC } from 'react';
import { SemanticField } from '../types';
import Card from './Card';
import SemanticFieldActivity from './SemanticFieldActivity';
import MatchingGame from './MatchingGame';

import BackButton from './BackButton';

interface VocabularyHubProps {
  semanticFields: SemanticField[];
}

const VocabularyHub: FC<VocabularyHubProps> = ({ semanticFields }) => {
  const [selectedField, setSelectedField] = useState<SemanticField | null>(null);
  const [activity, setActivity] = useState<'view' | 'match' | null>(null);

  const handleSelectField = (field: SemanticField) => {
    setSelectedField(field);
    setActivity('view');
  };

  const handleStartGame = () => {
    setActivity('match');
  };
  
  const handleGoBack = () => {
    setSelectedField(null);
    setActivity(null);
  };

  if (selectedField && activity === 'match') {
    return (
        <Card title={`Matching Game: ${selectedField.title}`}>
            <BackButton onClick={() => setActivity('view')}>Back to Terms</BackButton>
            <MatchingGame terms={selectedField.terms} onComplete={handleGoBack} />
        </Card>
    );
  }

  if (selectedField && activity === 'view') {
    return (
        <Card title={`Semantic Field: ${selectedField.title}`}>
             <BackButton onClick={handleGoBack}>Back to Vocabulary Hub</BackButton>
            <SemanticFieldActivity field={selectedField} onComplete={handleStartGame} showContinueButton={true} />
        </Card>
    );
  }

  return (
    <Card title="Vocabulary Hub">
      <div className="p-4 space-y-4">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          A "semantic field" is a group of words connected by a shared idea or theme. In "Death of a Salesman," Arthur Miller uses specific semantic fields to build the play's atmosphere and reveal character. Explore the fields below to deepen your understanding of the play's language.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {semanticFields.map(field => (
            <button
              key={field.id}
              onClick={() => handleSelectField(field)}
              className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:scale-105"
            >
              <h3 className="font-bold text-lg text-gray-800 dark:text-white">{field.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{field.description}</p>
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default VocabularyHub;
