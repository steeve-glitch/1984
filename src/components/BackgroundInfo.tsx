import React, { FC } from 'react';
import Card from './Card';

interface BackgroundInfoProps {
  onNavigate: () => void;
}

const BackgroundInfo: FC<BackgroundInfoProps> = ({ onNavigate }) => {
    return (
        <Card title="Welcome to the Study Guide">
            <div className="p-4 space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Welcome to the interactive study guide for George Orwell's <strong>1984</strong>.
                    Published in 1949, this novel presents a chilling vision of a totalitarian future where the state ("Big Brother") monitors every action and even the thoughts of its citizens.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Through a series of interactive activities, you will delve into the novel's characters, themes, and "Newspeak." You'll analyze key chapters, track important symbols, and get feedback on your own writing.
                </p>

                <div className="pt-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Analysis: Crash Course Literature</h3>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg mx-auto max-w-2xl">
                        <iframe 
                            src="https://www.youtube.com/embed/OEPaU_y_z-o" 
                            title="1984 by George Orwell, Part 1: Crash Course Literature 401" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full min-h-[300px]"
                        ></iframe>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">John Green explores the themes of power and identity in Orwell's Part 1.</p>
                </div>

                <div className="text-center pt-8">
                    <button onClick={onNavigate} className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 font-semibold shadow-md transition-colors">
                        Explore Part 1
                    </button>
                </div>
            </div>
        </Card>
    );
};

export default BackgroundInfo;
