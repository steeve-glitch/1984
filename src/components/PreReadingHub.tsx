import React from 'react';
import Card from './Card';
import { ViewMode } from '../types';

interface ActivityDefinition {
    id: ViewMode;
    title: string;
    description: string;
    icon: string;
    isImplemented: boolean;
}

const ACTIVITY_DEFINITIONS: ActivityDefinition[] = [
    {
        id: 'orthodoxy-check',
        title: 'Orthodoxy Check',
        description: 'Test your personal values against the Party line. Are you a loyal citizen or a potential thoughtcriminal?',
        icon: '👁️',
        isImplemented: true
    },
    {
        id: 'propaganda-decoder',
        title: 'Propaganda Decoder',
        description: 'Analyze the visual language of Oceanic posters and discover how the Ministry of Truth manipulates perception.',
        icon: '📢',
        isImplemented: false
    },
    {
        id: 'dystopian-blueprint',
        title: 'Dystopian Blueprint',
        description: 'Identify the core elements that define a dystopian society. Can you spot the red flags?',
        icon: '🏙️',
        isImplemented: false
    },
    {
        id: 'newspeak-lexicon',
        title: 'Newspeak Lexicon',
        description: 'Construct the official language of Oceania. Remember: narrowing language narrows thought.',
        icon: '📖',
        isImplemented: false
    },
    {
        id: 'orwell-dossier',
        title: "Orwell's Classified File",
        description: 'Access the restricted background on author George Orwell and the historical world of 1948.',
        icon: '📁',
        isImplemented: false
    }
];

interface PreReadingHubProps {
    onNavigate: (view: ViewMode) => void;
    completedActivities?: string[];
}

const PreReadingHub: React.FC<PreReadingHubProps> = ({ onNavigate, completedActivities = [] }) => {
    
    const getStatus = (activity: ActivityDefinition, index: number): 'active' | 'locked' | 'coming-soon' | 'completed' => {
        if (completedActivities.includes(activity.id)) return 'completed';
        if (!activity.isImplemented) return 'coming-soon';
        
        // It's active if it's the first one OR if the previous one is completed
        if (index === 0 || completedActivities.includes(ACTIVITY_DEFINITIONS[index - 1].id)) {
            return 'active';
        }
        
        return 'locked';
    };

    return (
        <div className="space-y-8">
            <header className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-ministry-black dark:text-white uppercase font-propaganda tracking-wider">
                    Pre-Reading Briefing Hub
                </h2>
                <p className="text-dystopia-gray dark:text-gray-400 font-terminal">
                    Required orientation modules for all Outer Party members. Complete these before proceeding to Part 1.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ACTIVITY_DEFINITIONS.map((def, index) => {
                    const status = getStatus(def, index);
                    const isActive = status === 'active';
                    const isCompleted = status === 'completed';
                    const isAvailable = isActive || isCompleted;

                    return (
                        <div 
                            key={def.id}
                            className={`relative group border-2 transition-all duration-300 ${
                                isAvailable 
                                    ? 'border-black dark:border-white hover:border-party-red cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1' 
                                    : 'border-gray-300 dark:border-gray-700 opacity-60 grayscale cursor-not-allowed'
                            }`}
                            onClick={() => isAvailable && onNavigate(def.id)}
                        >
                            <div className="p-6 bg-white dark:bg-gray-800 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-4xl">{def.icon}</span>
                                    <span className={`text-[10px] font-bold font-terminal uppercase px-2 py-1 border ${
                                        isCompleted
                                            ? 'border-green-600 text-green-600 bg-green-50 dark:bg-green-900/20'
                                            : isActive 
                                            ? 'border-party-red text-party-red animate-pulse' 
                                            : 'border-gray-400 text-gray-400'
                                    }`}>
                                        {status.replace('-', ' ')}
                                    </span>
                                </div>
                                
                                <h3 className={`text-xl font-bold font-propaganda uppercase mb-2 ${
                                    isAvailable ? 'text-ministry-black dark:text-white group-hover:text-party-red' : 'text-gray-500'
                                } ${isCompleted ? 'line-through opacity-70' : ''}`}>
                                    {def.title}
                                </h3>
                                
                                <p className="text-sm text-dystopia-gray dark:text-gray-400 font-terminal flex-grow">
                                    {def.description}
                                </p>

                                {isActive && (
                                    <div className="mt-4 flex items-center text-party-red font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                        Begin Module <span className="ml-2">→</span>
                                    </div>
                                )}
                                {isCompleted && (
                                    <div className="mt-4 flex items-center text-green-600 font-bold text-xs uppercase tracking-widest">
                                        Module Cleared <span className="ml-2">✓</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            <Card title="RESOURCES & DATA">
                <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-party-red flex items-center justify-center text-white text-2xl font-bold">!</div>
                        <div>
                            <p className="text-sm font-bold uppercase font-propaganda">Access Level: CLEARANCE LEVEL 4</p>
                            <p className="text-xs font-terminal text-gray-500">Ensure your screen is shielded from neighbors.</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => onNavigate('introduction')}
                        className="px-6 py-2 border-2 border-black dark:border-white font-bold uppercase text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                    >
                        Review Introduction
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default PreReadingHub;
