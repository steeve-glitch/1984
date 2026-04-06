import React, { useState, useEffect, useCallback } from 'react';

interface TutorialStep {
  targetId: string | null;
  title: string;
  body: string;
  /** Where the tooltip appears relative to the spotlight */
  side: 'center' | 'bottom' | 'top' | 'left' | 'right';
}

const STEPS: TutorialStep[] = [
  {
    targetId: null,
    title: 'ORIENTATION PROTOCOL',
    body: "Welcome, citizen. Before you begin your study of the text, the Ministry requires a brief induction. You will be shown the tools available to you. Comply.",
    side: 'center',
  },
  {
    targetId: 'tutorial-study-path',
    title: 'STUDY PATH',
    body: 'This strip tracks your progress through the novel. Complete each section in sequence to advance — or use it to revisit chapters you have already cleared.',
    side: 'bottom',
  },
  {
    targetId: 'tutorial-glossary',
    title: 'GLOSSARY',
    body: 'Access key literary terms and Newspeak vocabulary at any time. Consult it during close reading tasks.',
    side: 'bottom',
  },
  {
    targetId: 'tutorial-theme',
    title: 'NIGHT MODE',
    body: 'Switch between light and dark display. Recommended for late-night study sessions in your telescreen-lit dormitory.',
    side: 'bottom',
  },
  {
    targetId: 'tutorial-chatbot',
    title: 'THE ARCHIVIST',
    body: 'Your AI study companion. Ask about themes, characters, quotes, or essay technique. The Archivist never sleeps — and neither does the Party.',
    side: 'top',
  },
];

const PADDING = 10; // px padding around spotlight

interface SpotlightRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface TutorialOverlayProps {
  onDismiss: () => void;
}

const TutorialOverlay: React.FC<TutorialOverlayProps> = ({ onDismiss }) => {
  const [step, setStep] = useState(0);
  const [rect, setRect] = useState<SpotlightRect | null>(null);

  const currentStep = STEPS[step];
  const isLast = step === STEPS.length - 1;
  const isFirst = step === 0;

  const updateRect = useCallback(() => {
    if (!currentStep.targetId) {
      setRect(null);
      return;
    }
    const el = document.getElementById(currentStep.targetId);
    if (!el) {
      setRect(null);
      return;
    }
    const r = el.getBoundingClientRect();
    setRect({
      top: r.top - PADDING,
      left: r.left - PADDING,
      width: r.width + PADDING * 2,
      height: r.height + PADDING * 2,
    });
  }, [currentStep.targetId]);

  useEffect(() => {
    updateRect();
    window.addEventListener('resize', updateRect);
    return () => window.removeEventListener('resize', updateRect);
  }, [updateRect]);

  const handleNext = () => {
    if (isLast) onDismiss();
    else setStep(s => s + 1);
  };

  const handlePrev = () => setStep(s => s - 1);

  // ── Tooltip position ───────────────────────────────────────────────────────

  const tooltipStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'fixed',
      zIndex: 10001,
      width: 300,
    };

    if (!rect || currentStep.side === 'center') {
      return {
        ...baseStyle,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 360,
      };
    }

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    switch (currentStep.side) {
      case 'bottom':
        return {
          ...baseStyle,
          top: rect.top + rect.height + 16,
          left: Math.min(Math.max(centerX - 150, 12), window.innerWidth - 312),
        };
      case 'top':
        return {
          ...baseStyle,
          bottom: window.innerHeight - rect.top + 16,
          left: Math.min(Math.max(centerX - 150, 12), window.innerWidth - 312),
        };
      case 'left':
        return {
          ...baseStyle,
          top: Math.min(Math.max(centerY - 80, 12), window.innerHeight - 200),
          right: window.innerWidth - rect.left + 16,
        };
      case 'right':
        return {
          ...baseStyle,
          top: Math.min(Math.max(centerY - 80, 12), window.innerHeight - 200),
          left: rect.left + rect.width + 16,
        };
    }
  };

  return (
    <>
      {/* Dark overlay */}
      <div
        className="fixed inset-0 z-[10000] pointer-events-none"
        style={{ background: 'rgba(0,0,0,0.75)' }}
      />

      {/* Spotlight cutout — box-shadow punches through the overlay */}
      {rect && (
        <div
          className="fixed pointer-events-none"
          style={{
            zIndex: 10000,
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            borderRadius: 2,
            boxShadow: '0 0 0 9999px rgba(0,0,0,0.75)',
            border: '2px solid #dc2626',
            animation: 'pulse-border 1.5s ease-in-out infinite',
          }}
        />
      )}

      {/* Tooltip card */}
      <div
        style={tooltipStyle()}
        className="bg-ministry-black border-2 border-party-red p-5 font-terminal pointer-events-auto"
      >
        {/* Step indicator */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-party-red text-[9px] uppercase tracking-[0.3em]">
            Protocol {step + 1} / {STEPS.length}
          </span>
          <button
            onClick={onDismiss}
            className="text-gray-600 hover:text-gray-300 text-[10px] uppercase tracking-widest transition-colors"
          >
            Skip
          </button>
        </div>

        {/* Title */}
        <h3 className="text-white font-propaganda text-lg uppercase tracking-widest mb-2">
          {currentStep.title}
        </h3>

        {/* Body */}
        <p className="text-gray-300 text-[12px] leading-relaxed mb-5">
          {currentStep.body}
        </p>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={isFirst}
            className="text-gray-500 hover:text-gray-200 text-[10px] uppercase tracking-widest transition-colors disabled:opacity-0"
          >
            ← Back
          </button>

          {/* Dots */}
          <div className="flex gap-1.5">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === step ? 'bg-party-red' : 'bg-gray-700'}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="px-4 py-1.5 bg-party-red text-white text-[10px] uppercase tracking-widest hover:bg-red-700 transition-colors"
          >
            {isLast ? 'Begin →' : 'Next →'}
          </button>
        </div>
      </div>
    </>
  );
};

export default TutorialOverlay;
