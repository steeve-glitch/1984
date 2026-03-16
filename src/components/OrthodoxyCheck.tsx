import React, { useState } from 'react';
import Card from './Card';

interface Statement {
    id: number;
    text: string;
    description: string;
}

const STATEMENTS: Statement[] = [
    {
        id: 1,
        text: "Absolute privacy is a threat to national security.",
        description: "If a citizen has nothing to hide, they have nothing to fear from constant surveillance."
    },
    {
        id: 2,
        text: "The government has the right to rewrite history for the 'greater good'.",
        description: "Correcting the past ensures a stable future and prevents public confusion."
    },
    {
        id: 3,
        text: "It is better to be safe and monitored than free and in danger.",
        description: "Freedom is often just the ability to make mistakes that hurt others."
    },
    {
        id: 4,
        text: "Loyalty to the state should come before loyalty to the family.",
        description: "The nation is the ultimate family; personal bonds are secondary to civic duty."
    },
    {
        id: 5,
        text: "True peace can only be achieved through the elimination of dissent.",
        description: "Argument and debate are simply friction that slows down the progress of society."
    }
];

interface OrthodoxyCheckProps {
    onComplete: () => void;
}

const OrthodoxyCheck: React.FC<OrthodoxyCheckProps> = ({ onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [responses, setResponses] = useState<Record<number, boolean>>({});
    const [isFinished, setIsFinished] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleResponse = (isOrthodox: boolean) => {
        setIsProcessing(true);
        
        // Simulate "Processing..." loyalty check
        setTimeout(() => {
            const newResponses = { ...responses, [STATEMENTS[currentIndex].id]: isOrthodox };
            setResponses(newResponses);
            setIsProcessing(false);
            
            if (currentIndex < STATEMENTS.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setIsFinished(true);
            }
        }, 800);
    };

    const getLoyaltyScore = () => {
        const orthodoxCount = Object.values(responses).filter(v => v).length;
        return (orthodoxCount / STATEMENTS.length) * 100;
    };

    if (isFinished) {
        const score = getLoyaltyScore();
        return (
            <Card title="LOYALTY ASSESSMENT COMPLETE">
                <div className="p-8 text-center space-y-6">
                    <div className="inline-block p-4 border-4 border-party-red bg-black">
                        <h3 className="text-4xl font-bold text-party-red font-propaganda uppercase tracking-widest">
                            {score >= 80 ? "ORTHODOX" : score >= 40 ? "PROVISIONAL" : "UNORTHODOX"}
                        </h3>
                    </div>
                    
                    <p className="text-xl text-gray-700 dark:text-gray-300 font-terminal">
                        Loyalty Rating: {score}%
                    </p>
                    
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 border-l-4 border-party-red text-left italic">
                        {score >= 80 
                            ? "Your thoughts are aligned with the Party. You are a pillar of Oceania."
                            : score >= 40
                            ? "Your alignment is acceptable, but requires further conditioning."
                            : "WARNING: Your thought patterns show dangerous deviations. Report to the Ministry of Love."}
                    </div>

                    <button 
                        onClick={onComplete}
                        className="mt-8 px-8 py-4 bg-party-red text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-colors shadow-lg"
                    >
                        Return to Briefing
                    </button>
                </div>
            </Card>
        );
    }

    const currentStatement = STATEMENTS[currentIndex];

    return (
        <Card title={`CITIZEN ORTHODOXY TEST: ${currentIndex + 1}/${STATEMENTS.length}`}>
            <div className="p-6 md:p-12 space-y-8 relative">
                {isProcessing && (
                    <div className="absolute inset-0 bg-white/80 dark:bg-black/80 z-10 flex flex-col items-center justify-center">
                        <div className="w-12 h-12 border-4 border-party-red border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p className="text-party-red font-bold animate-pulse font-terminal uppercase tracking-widest">Processing Loyalty...</p>
                    </div>
                )}

                <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-ministry-black dark:text-white uppercase font-propaganda leading-tight">
                        "{currentStatement.text}"
                    </h3>
                    <p className="text-dystopia-gray dark:text-gray-400 font-terminal italic">
                        {currentStatement.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                    <button
                        onClick={() => handleResponse(true)}
                        className="group relative p-6 border-2 border-black dark:border-white hover:bg-party-red hover:border-party-red transition-all duration-300"
                    >
                        <span className="block text-sm font-terminal uppercase text-gray-500 dark:text-gray-400 group-hover:text-white mb-1">Option A</span>
                        <span className="block text-2xl font-bold font-propaganda uppercase group-hover:text-white">Orthodox</span>
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-white">✓</div>
                    </button>

                    <button
                        onClick={() => handleResponse(false)}
                        className="group relative p-6 border-2 border-black dark:border-white hover:bg-ministry-black hover:border-ministry-black transition-all duration-300"
                    >
                        <span className="block text-sm font-terminal uppercase text-gray-500 dark:text-gray-400 group-hover:text-white mb-1">Option B</span>
                        <span className="block text-2xl font-bold font-propaganda uppercase group-hover:text-white">Unorthodox</span>
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-white">⚠</div>
                    </button>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-terminal uppercase tracking-tighter">
                        Thoughtcrime is death. Thoughtcrime does not entail death: thoughtcrime IS death.
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default OrthodoxyCheck;
