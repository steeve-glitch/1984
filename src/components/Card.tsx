import React, { FC, ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white text-center">{title}</h2>
      </div>
      <div className="p-2 sm:p-4">
        {children}
      </div>
    </div>
  );
};

export default Card;
