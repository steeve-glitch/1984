import React, { FC } from 'react';

const LockedContent: FC = () => {
  return (
    <div className="p-6 text-center">
      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Content Locked</h3>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Please complete the previous activities to unlock this section.
      </p>
    </div>
  );
};

export default LockedContent;
