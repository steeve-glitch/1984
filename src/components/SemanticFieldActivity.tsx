import React, { FC } from 'react';
import { SemanticField } from '../types';

interface SemanticFieldActivityProps {
  field: SemanticField;
  onComplete: () => void;
  showContinueButton?: boolean;
}

const SemanticFieldActivity: FC<SemanticFieldActivityProps> = ({ field, onComplete, showContinueButton = true }) => {
  return (
    <div className="p-4 space-y-4">
      <p className="text-center text-gray-600 dark:text-gray-300">{field.description}</p>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Word / Concept</th>
              <th scope="col" className="px-6 py-3">Connection to the novel</th>
            </tr>
          </thead>
          <tbody>
            {field.terms.map((term, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">
                  {term.word}
                  <p className="font-normal text-gray-500 dark:text-gray-400 mt-1">{term.definition}</p>
                </td>
                <td className="px-6 py-4">
                  {term.connection}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showContinueButton && (
        <div className="text-center pt-6">
            <button
                onClick={onComplete}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Test Your Knowledge &rarr;
            </button>
        </div>
      )}
    </div>
  );
};

export default SemanticFieldActivity;
