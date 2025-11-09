import React, { useState, FC } from 'react';
import Card from './Card';
import SceneAnalysis from './SceneAnalysis';
import ReadingCompQuiz from './ReadingCompQuiz';
import StealCharacterizationActivity from './StealCharacterizationActivity';
import QuoteAnalysis from './QuoteAnalysis';
import SymbolCharacterGame from './SymbolCharacterGame';
import AnalysisReflection from './AnalysisReflection';
import SemanticFieldActivity from './SemanticFieldActivity';
import MatchingGame from './MatchingGame';
import ThemeTracker from './ThemeTracker';
import { Scene, Character, SymbolInfo, Theme } from '../types';
import { SEMANTIC_FIELDS } from '../constants';

interface SceneContainerProps {
  scene: Scene;
  onComplete: () => void;
  allCharacters: Character[];
  allSymbols: SymbolInfo[];
  allThemes: Theme[];
}

type SceneActivity = 'analysis' | 'readingComp' | 'semanticField' | 'matchingGame' | 'steal' | 'quote' | 'game' | 'reflection';

const SceneContainer: FC<SceneContainerProps> = ({ scene, onComplete, allCharacters, allSymbols, allThemes }) => {
  const activityFlow: SceneActivity[] = [
    'analysis',
    'readingComp',
    'semanticField',
    'matchingGame',
    'steal',
    'quote',
    'game',
    'reflection',
  ];

  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const semanticField = SEMANTIC_FIELDS.find(sf => sf.id === scene.semanticFieldId);

  const handleNextActivity = () => {
    if (currentActivityIndex < activityFlow.length - 1) {
      setCurrentActivityIndex(currentActivityIndex + 1);
    } else {
      onComplete();
    }
  };
  
  const renderCurrentActivity = () => {
    const activity = activityFlow[currentActivityIndex];
    
    switch (activity) {
      case 'analysis':
        return <SceneAnalysis sceneSummary={scene.summary} clickableCharacters={allCharacters} clickableSymbols={allSymbols} onComplete={handleNextActivity} />;
      case 'readingComp':
        return <ReadingCompQuiz questions={scene.readingCompData} onComplete={handleNextActivity} />;
      case 'semanticField':
        // FIX: Return null after state update to ensure a valid ReactNode is returned.
        if (!semanticField) {
            handleNextActivity();
            return null;
        }
        return <SemanticFieldActivity field={semanticField} onComplete={handleNextActivity} />;
      case 'matchingGame':
        // FIX: Return null after state update to ensure a valid ReactNode is returned.
        if (!semanticField) {
            handleNextActivity();
            return null;
        }
        return <MatchingGame terms={semanticField.terms} onComplete={handleNextActivity} />;
      case 'steal':
        return <StealCharacterizationActivity data={scene.stealData} onComplete={handleNextActivity} />;
      case 'quote':
        return <QuoteAnalysis quotes={[scene.quote]} onComplete={handleNextActivity} />;
      case 'game':
        return <SymbolCharacterGame gameData={scene.gameData} onComplete={handleNextActivity} />;
      case 'reflection':
        return <AnalysisReflection question={scene.reflectionPrompt} onComplete={handleNextActivity} />;
      default:
        return <p>Activity not found.</p>;
    }
  };
  
  const activityTitles: Record<SceneActivity, string> = {
    analysis: 'Scene Summary & Analysis',
    readingComp: 'Reading Comprehension Check',
    semanticField: `Vocabulary Focus: ${semanticField?.title || ''}`,
    matchingGame: 'Vocabulary Matching Game',
    steal: 'S.T.E.A.L. Characterization',
    quote: 'Key Quote Analysis',
    game: 'Symbol & Character Challenge',
    reflection: 'Analysis & Reflection',
  };

  return (
    <div className="space-y-8">
        <ThemeTracker sceneThemes={scene.themes} allThemes={allThemes} />
        <Card title={`${scene.title}: ${activityTitles[activityFlow[currentActivityIndex]]}`}>
            {renderCurrentActivity()}
        </Card>
    </div>
  );
};

export default SceneContainer;