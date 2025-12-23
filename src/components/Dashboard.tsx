import React, { FC } from 'react';
import { ViewMode } from '../types';
import { PART1_SCENES, PART2_SCENES } from '../constants';

interface DashboardProps {
    completedScenes: string[];
    doublethinkCompleted?: boolean;
    onNavigate: (view: ViewMode, sceneIndex?: number) => void;
}

const Dashboard: FC<DashboardProps> = ({ completedScenes, doublethinkCompleted = false, onNavigate }) => {

    // Progress calculations
    const isPart1Complete = PART1_SCENES.every(s => completedScenes.includes(s.id));
    const isPart2Complete = PART2_SCENES.every(s => completedScenes.includes(s.id));

    // Determine the next step
    let nextUp = {
        title: "Introduction & Background",
        action: () => onNavigate('introduction'),
        description: "Start here to understand the context of the novel."
    };

    const firstIncompletePart1Index = PART1_SCENES.findIndex(s => !completedScenes.includes(s.id));
    const firstIncompletePart2Index = PART2_SCENES.findIndex(s => !completedScenes.includes(s.id));

    if (completedScenes.length > 0) {
        if (firstIncompletePart1Index !== -1) {
            // Still in Part 1
            nextUp = {
                title: `Part 1, Ch ${firstIncompletePart1Index + 1}: ${PART1_SCENES[firstIncompletePart1Index].title}`,
                action: () => onNavigate('scenes-part1', firstIncompletePart1Index),
                description: PART1_SCENES[firstIncompletePart1Index].summary.substring(0, 100) + "..."
            };
        } else if (!doublethinkCompleted) {
            // Part 1 complete, Doublethink not done
            nextUp = {
                title: "Doublethink Challenge",
                action: () => onNavigate('doublethink-game'),
                description: "Test your understanding of Party ideology before proceeding to Part 2."
            };
        } else if (firstIncompletePart2Index !== -1) {
            // In Part 2
            nextUp = {
                title: `Part 2, Ch ${firstIncompletePart2Index + 1}: ${PART2_SCENES[firstIncompletePart2Index].title}`,
                action: () => onNavigate('scenes-part2', firstIncompletePart2Index),
                description: PART2_SCENES[firstIncompletePart2Index].summary.substring(0, 100) + "..."
            };
        } else {
            // All complete!
            nextUp = {
                title: "Journey Complete!",
                action: () => onNavigate('writing'),
                description: "Excellent work! Head to the Writing Workshop to synthesize your knowledge."
            };
        }
    }

    const CheckIcon = () => (
        <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
    );

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

                    {/* Introduction */}
                    <div className="relative">
                        <span className={`absolute -left-[43px] flex h-6 w-6 items-center justify-center ring-4 ring-paper-white dark:ring-gray-800 bg-party-red`}>
                            {completedScenes.length > 0 ? <CheckIcon /> : <span className="h-2 w-2 bg-white" />}
                        </span>
                        <div className="group cursor-pointer" onClick={() => onNavigate('introduction')}>
                            <h4 className="text-lg font-bold text-ministry-black dark:text-white group-hover:text-party-red font-propaganda uppercase">Introduction & Context</h4>
                            <p className="text-sm text-dystopia-gray dark:text-gray-400 font-terminal">Historical background and major themes.</p>
                        </div>
                    </div>

                    {/* Part 1 Header */}
                    <div className="relative">
                        <span className={`absolute -left-[43px] flex h-6 w-6 items-center justify-center ring-4 ring-paper-white dark:ring-gray-800 ${isPart1Complete ? 'bg-party-red' : 'bg-ministry-black border-2 border-party-red'}`}>
                            {isPart1Complete ? <CheckIcon /> : <span className="text-xs text-party-red font-bold">1</span>}
                        </span>
                        <div>
                            <h4 className="text-xl font-bold text-party-red font-propaganda uppercase">Part One: The World of Oceania</h4>
                            <p className="text-sm text-dystopia-gray dark:text-gray-400 font-terminal">{PART1_SCENES.filter(s => completedScenes.includes(s.id)).length} / {PART1_SCENES.length} chapters completed</p>
                        </div>
                    </div>

                    {/* Part 1 Scenes */}
                    {PART1_SCENES.map((scene, index) => {
                        const isCompleted = completedScenes.includes(scene.id);
                        const isLocked = index > 0 && !completedScenes.includes(PART1_SCENES[index - 1].id);

                        return (
                            <div key={scene.id} className="relative ml-4">
                                <span className={`absolute -left-[47px] flex h-5 w-5 items-center justify-center ring-2 ring-paper-white dark:ring-gray-800
                                    ${isCompleted ? 'bg-party-red' : isLocked ? 'bg-gray-400' : 'bg-black border border-party-red'}`}>
                                    {isCompleted ? <CheckIcon /> : !isLocked && <span className="h-1.5 w-1.5 bg-party-red animate-ping" />}
                                </span>
                                <div className={`group ${isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => !isLocked && onNavigate('scenes-part1', index)}>
                                    <h4 className={`text-base font-bold font-propaganda uppercase ${isLocked ? 'text-gray-500' : 'text-ministry-black dark:text-white group-hover:text-party-red'}`}>
                                        Ch {index + 1}: {scene.title}
                                    </h4>
                                </div>
                            </div>
                        );
                    })}

                    {/* Doublethink Challenge */}
                    <div className="relative">
                        <span className={`absolute -left-[43px] flex h-6 w-6 items-center justify-center ring-4 ring-paper-white dark:ring-gray-800
                            ${doublethinkCompleted ? 'bg-party-red' : !isPart1Complete ? 'bg-gray-400' : 'bg-yellow-500 border-2 border-yellow-600'}`}>
                            {doublethinkCompleted ? <CheckIcon /> : !isPart1Complete ? <span className="text-xs">🔒</span> : <span className="text-xs">⚡</span>}
                        </span>
                        <div className={`group ${!isPart1Complete ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => isPart1Complete && onNavigate('doublethink-game')}>
                            <h4 className={`text-xl font-bold font-propaganda uppercase ${!isPart1Complete ? 'text-gray-500' : doublethinkCompleted ? 'text-party-red' : 'text-yellow-500 group-hover:text-yellow-400'}`}>
                                Doublethink Challenge
                            </h4>
                            <p className="text-sm text-dystopia-gray dark:text-gray-400 font-terminal">
                                {doublethinkCompleted ? 'Orthodoxy confirmed!' : !isPart1Complete ? 'Complete Part 1 to unlock' : 'Test your Party loyalty'}
                            </p>
                        </div>
                    </div>

                    {/* Part 2 Header */}
                    <div className="relative">
                        <span className={`absolute -left-[43px] flex h-6 w-6 items-center justify-center ring-4 ring-paper-white dark:ring-gray-800
                            ${isPart2Complete ? 'bg-party-red' : !doublethinkCompleted ? 'bg-gray-400' : 'bg-ministry-black border-2 border-party-red'}`}>
                            {isPart2Complete ? <CheckIcon /> : !doublethinkCompleted ? <span className="text-xs">🔒</span> : <span className="text-xs text-party-red font-bold">2</span>}
                        </span>
                        <div className={!doublethinkCompleted ? 'opacity-50' : ''}>
                            <h4 className={`text-xl font-bold font-propaganda uppercase ${!doublethinkCompleted ? 'text-gray-500' : 'text-party-red'}`}>Part Two: Winston & Julia</h4>
                            <p className="text-sm text-dystopia-gray dark:text-gray-400 font-terminal">
                                {!doublethinkCompleted ? 'Complete Doublethink Challenge to unlock' : `${PART2_SCENES.filter(s => completedScenes.includes(s.id)).length} / ${PART2_SCENES.length} chapters completed`}
                            </p>
                        </div>
                    </div>

                    {/* Part 2 Scenes */}
                    {doublethinkCompleted && PART2_SCENES.map((scene, index) => {
                        const isCompleted = completedScenes.includes(scene.id);
                        const isLocked = index > 0 && !completedScenes.includes(PART2_SCENES[index - 1].id);

                        return (
                            <div key={scene.id} className="relative ml-4">
                                <span className={`absolute -left-[47px] flex h-5 w-5 items-center justify-center ring-2 ring-paper-white dark:ring-gray-800
                                    ${isCompleted ? 'bg-party-red' : isLocked ? 'bg-gray-400' : 'bg-black border border-party-red'}`}>
                                    {isCompleted ? <CheckIcon /> : !isLocked && <span className="h-1.5 w-1.5 bg-party-red animate-ping" />}
                                </span>
                                <div className={`group ${isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => !isLocked && onNavigate('scenes-part2', index)}>
                                    <h4 className={`text-base font-bold font-propaganda uppercase ${isLocked ? 'text-gray-500' : 'text-ministry-black dark:text-white group-hover:text-party-red'}`}>
                                        Ch {index + 1}: {scene.title}
                                    </h4>
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
