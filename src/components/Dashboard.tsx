import React, { FC } from 'react';
import { ViewMode } from '../types';
import { SCENES } from '../constants';

interface DashboardProps {
    completedScenes: string[];
    onNavigate: (view: ViewMode, sceneIndex?: number) => void;
}

const Dashboard: FC<DashboardProps> = ({ completedScenes, onNavigate }) => {
    
    // Determine the next step
    // Step 0 is Intro.
    let nextUp = {
        title: "Introduction & Background",
        action: () => onNavigate('introduction'),
        description: "Start here to understand the context of the novel."
    };

    const firstIncompleteSceneIndex = SCENES.findIndex(s => !completedScenes.includes(s.id));
    
    if (completedScenes.length > 0) {
        if (firstIncompleteSceneIndex !== -1) {
            nextUp = {
                title: `Chapter ${firstIncompleteSceneIndex + 1}: ${SCENES[firstIncompleteSceneIndex].title}`,
                action: () => onNavigate('scenes', firstIncompleteSceneIndex),
                description: SCENES[firstIncompleteSceneIndex].summary.substring(0, 100) + "..."
            };
        } else {
             nextUp = {
                title: "Part 1 Completed!",
                action: () => onNavigate('writing'),
                description: "Great job! Head over to the Writing Workshop to synthesize your knowledge."
            };
        }
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-ministry-black dark:text-white mb-2 uppercase tracking-widest font-propaganda">Welcome to Your Study Journey</h1>
                <p className="text-dystopia-gray dark:text-gray-400 font-terminal">Track your progress through George Orwell's <em>1984</em>.</p>
            </header>

            {/* Next Up Card */}
            <div className="bg-ministry-black text-paper-white border-4 border-party-red p-6 transform hover:scale-[1.01] transition-transform cursor-pointer shadow-lg relative overflow-hidden" onClick={nextUp.action}>
                <div className="absolute top-0 right-0 p-2 opacity-50 pointer-events-none">
                    <span className="stamp rotate-12 border-white text-white">PRIORITY 1</span>
                </div>
                <div className="flex justify-between items-center relative z-10">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-party-red mb-1 font-terminal">Next Assignment</h2>
                        <h3 className="text-3xl font-bold mb-2 font-propaganda uppercase">{nextUp.title}</h3>
                        <p className="text-gray-400 max-w-2xl font-terminal border-l-2 border-party-red pl-4">{nextUp.description}</p>
                    </div>
                    <div className="hidden sm:flex h-16 w-16 border-2 border-party-red items-center justify-center bg-black">
                        <svg className="w-8 h-8 text-party-red animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="bg-paper-white dark:bg-gray-800 border-2 border-black dark:border-gray-500 p-6 shadow-md">
                <h3 className="text-2xl font-bold text-ministry-black dark:text-white mb-6 uppercase border-b-2 border-black pb-2 font-propaganda">Course Map</h3>
                <div className="relative border-l-4 border-black dark:border-gray-500 ml-3 space-y-8 pl-8 pb-2">
                    
                    {/* Step 1: Intro */}
                    <div className="relative">
                        <span className={`absolute -left-[43px] flex h-6 w-6 items-center justify-center ring-4 ring-paper-white dark:ring-gray-800 bg-party-red`}>
                            {completedScenes.length > 0 ? (
                                <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            ) : (
                                <span className="h-2 w-2 bg-white" />
                            )}
                        </span>
                        <div className="group cursor-pointer" onClick={() => onNavigate('introduction')}>
                            <h4 className="text-lg font-bold text-ministry-black dark:text-white group-hover:text-party-red font-propaganda uppercase">Introduction & Context</h4>
                            <p className="text-sm text-dystopia-gray dark:text-gray-400 font-terminal">Historical background and major themes.</p>
                        </div>
                    </div>

                    {/* Scenes */}
                    {SCENES.map((scene, index) => {
                        const isCompleted = completedScenes.includes(scene.id);
                        const isLocked = index > 0 && !completedScenes.includes(SCENES[index - 1].id); // Simple lock logic
                        
                        return (
                            <div key={scene.id} className="relative">
                                <span className={`absolute -left-[43px] flex h-6 w-6 items-center justify-center ring-4 ring-paper-white dark:ring-gray-800 
                                    ${isCompleted 
                                        ? 'bg-party-red' 
                                        : isLocked 
                                            ? 'bg-gray-400' 
                                            : 'bg-black border-2 border-party-red'
                                    }`}>
                                    {isCompleted ? (
                                        <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    ) : (
                                        !isLocked && <span className="h-2 w-2 bg-party-red animate-ping" />
                                    )}
                                </span>
                                <div className={`group ${isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => !isLocked && onNavigate('scenes', index)}>
                                    <h4 className={`text-lg font-bold font-propaganda uppercase ${isLocked ? 'text-gray-500' : 'text-ministry-black dark:text-white group-hover:text-party-red'}`}>
                                        Chapter {index + 1}: {scene.title}
                                    </h4>
                                    <p className={`text-sm font-terminal truncate max-w-md ${isLocked ? 'text-gray-400' : 'text-dystopia-gray dark:text-gray-400'} ${!isLocked && 'redacted'}`}>
                                        {scene.summary}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
