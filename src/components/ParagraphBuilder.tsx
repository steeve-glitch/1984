import React, { useState, FC } from 'react';
import { ParagraphBuilderData, ParagraphStepId } from '../types';

interface Props {
  data: ParagraphBuilderData;
  onComplete: () => void;
}

const STEP_COLOURS: Record<ParagraphStepId, string> = {
  claim:        'bg-blue-100 dark:bg-blue-900/30 border-blue-400',
  technique:    'bg-purple-100 dark:bg-purple-900/30 border-purple-400',
  evidence:     'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-400',
  effect:       'bg-green-100 dark:bg-green-900/30 border-green-400',
  significance: 'bg-red-100 dark:bg-red-900/30 border-red-400',
};

const STEP_BORDER_COLOUR: Record<ParagraphStepId, string> = {
  claim:        'border-blue-400',
  technique:    'border-purple-400',
  evidence:     'border-yellow-400',
  effect:       'border-green-400',
  significance: 'border-red-400',
};

const STEP_LABELS: Record<ParagraphStepId, string> = {
  claim:        'Claim',
  technique:    'Technique',
  evidence:     'Evidence',
  effect:       'Analysis',
  significance: 'Significance',
};

const ParagraphBuilder: FC<Props> = ({ data, onComplete }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [freeText, setFreeText] = useState('');
  const [completedSteps, setCompletedSteps] = useState<Record<string, string>>({});
  const [showParagraph, setShowParagraph] = useState(false);
  const [showModel, setShowModel] = useState(false);

  const currentStep = data.steps[stepIndex];
  const isLastStep = stepIndex === data.steps.length - 1;
  const canProceed = freeText.trim().length > 0;

  const handleOptionSelect = (i: number) => {
    setSelectedOption(i);
    setFreeText(currentStep.guidedOptions[i]);
  };

  const handleConfirm = () => {
    const text = freeText.trim();
    const newCompleted = { ...completedSteps, [currentStep.id]: text };
    setCompletedSteps(newCompleted);

    if (isLastStep) {
      setShowParagraph(true);
    } else {
      setStepIndex(i => i + 1);
      setSelectedOption(null);
      setFreeText('');
    }
  };

  if (showParagraph) {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="font-propaganda font-bold uppercase text-ministry-black dark:text-white tracking-wider mb-4">
            Your Analytical Paragraph
          </h3>
          <div className="bg-white dark:bg-gray-800 border-2 border-black dark:border-gray-600 p-6 space-y-1 font-terminal text-sm leading-7 text-gray-800 dark:text-gray-200">
            {data.steps.map(step => (
              <span
                key={step.id}
                className={`inline border-b-2 ${STEP_BORDER_COLOUR[step.id as ParagraphStepId]}`}
                title={STEP_LABELS[step.id]}
              >
                {completedSteps[step.id]}{' '}
              </span>
            ))}
          </div>

          {/* Colour key */}
          <div className="flex flex-wrap gap-3 mt-3">
            {data.steps.map(step => (
              <div key={step.id} className="flex items-center gap-1.5">
                <div className={`w-3 h-1 border-b-2 ${STEP_BORDER_COLOUR[step.id as ParagraphStepId]}`} />
                <span className="font-terminal text-[10px] uppercase tracking-wide text-gray-500">
                  {STEP_LABELS[step.id]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Model paragraph toggle */}
        <div className="border-2 border-gray-300 dark:border-gray-600">
          <button
            onClick={() => setShowModel(v => !v)}
            className="w-full flex items-center justify-between p-4 font-terminal text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <span>Compare with a model paragraph</span>
            <span>{showModel ? '▲' : '▼'}</span>
          </button>
          {showModel && (
            <div className="p-5 border-t border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
              <p className="font-terminal text-sm leading-7 text-gray-700 dark:text-gray-300">
                {data.modelParagraph}
              </p>
              <p className="font-terminal text-[10px] text-gray-400 mt-3 uppercase tracking-widest">
                This is one possible version — yours may be equally valid if your argument is supported by evidence.
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <button
            onClick={onComplete}
            className="px-6 py-3 bg-party-red text-white font-bold font-propaganda uppercase tracking-widest text-sm hover:bg-red-700 transition-colors"
          >
            Continue →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Focus */}
      <div className="bg-ministry-black text-white p-4">
        <p className="text-[10px] font-terminal uppercase tracking-widest text-gray-400 mb-1">The question you are answering</p>
        <p className="font-terminal text-sm leading-relaxed">{data.focus}</p>
      </div>

      {/* Progress — step chips */}
      <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-hide">
        {data.steps.map((step, i) => {
          const isDone = i < stepIndex;
          const isActive = i === stepIndex;
          return (
            <React.Fragment key={step.id}>
              <div
                className={`flex-shrink-0 flex items-center gap-1 px-3 py-1 border font-terminal text-[10px] uppercase tracking-wide
                  ${isActive
                    ? 'border-party-red bg-party-red text-white font-bold'
                    : isDone
                    ? 'border-green-700 text-green-500'
                    : 'border-gray-300 dark:border-gray-700 text-gray-400'
                  }`}
              >
                {isDone ? '✓' : STEP_LABELS[step.id as ParagraphStepId]}
              </div>
              {i < data.steps.length - 1 && (
                <span className={`flex-shrink-0 text-xs ${isDone ? 'text-green-700' : 'text-gray-300 dark:text-gray-700'}`}>›</span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Current step */}
      <div className={`border-2 p-5 space-y-4 ${STEP_COLOURS[currentStep.id as ParagraphStepId]}`}>
        <div>
          <p className="font-propaganda font-bold uppercase tracking-wider text-ministry-black dark:text-white text-sm">
            Step {stepIndex + 1}: {STEP_LABELS[currentStep.id as ParagraphStepId]}
          </p>
          <p className="font-terminal text-xs text-gray-600 dark:text-gray-400 mt-1">
            {currentStep.instruction}
          </p>
        </div>

        {/* Guided options */}
        <div className="space-y-2">
          {currentStep.guidedOptions.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleOptionSelect(i)}
              className={`w-full text-left p-3 border font-terminal text-sm leading-relaxed transition-all duration-150
                ${selectedOption === i
                  ? 'border-party-red bg-white dark:bg-gray-900 font-medium'
                  : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-gray-500'
                }`}
            >
              <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">
                {selectedOption === i ? '● Selected' : `Option ${String.fromCharCode(65 + i)}`}
              </span>
              {opt}
            </button>
          ))}
        </div>

        {/* Free text */}
        <div className="space-y-1">
          <label className="font-terminal text-[10px] uppercase tracking-widest text-gray-500">
            {selectedOption !== null ? 'Edit or write your own version:' : 'Or write your own:'}
          </label>
          <textarea
            value={freeText}
            onChange={e => setFreeText(e.target.value)}
            placeholder={currentStep.placeholder}
            rows={3}
            className="w-full p-3 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 font-terminal text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-party-red resize-none"
          />
        </div>
      </div>

      {/* Completed steps preview */}
      {Object.keys(completedSteps).length > 0 && (
        <div className="border border-gray-200 dark:border-gray-700 p-4">
          <p className="font-terminal text-[10px] uppercase tracking-widest text-gray-400 mb-3">Built so far</p>
          <div className="space-y-1 font-terminal text-sm text-gray-600 dark:text-gray-400">
            {data.steps.slice(0, stepIndex).map(step => (
              <div key={step.id} className="flex items-start gap-2">
                <span className="text-[10px] uppercase tracking-wide text-gray-400 flex-shrink-0 mt-0.5 w-20">
                  {STEP_LABELS[step.id as ParagraphStepId]}
                </span>
                <span className="leading-relaxed">{completedSteps[step.id]}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={handleConfirm}
          disabled={!canProceed}
          className="px-6 py-3 bg-party-red text-white font-bold font-propaganda uppercase tracking-widest text-sm hover:bg-red-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isLastStep ? 'Build My Paragraph →' : 'Confirm & Continue →'}
        </button>
      </div>
    </div>
  );
};

export default ParagraphBuilder;
