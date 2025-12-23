import React, { FC, ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-paper-white dark:bg-gray-800 border-2 border-black dark:border-gray-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] mb-6">
      <div className="bg-ministry-black dark:bg-gray-900 px-6 py-3 border-b-2 border-black dark:border-gray-500 flex justify-between items-center">
        <h2 className="text-xl font-bold text-white uppercase tracking-widest font-propaganda">{title}</h2>
        <div className="hidden sm:block h-3 w-3 bg-party-red rounded-full animate-pulse"></div>
      </div>
      <div className="p-4 sm:p-6 font-terminal text-sm sm:text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default Card;