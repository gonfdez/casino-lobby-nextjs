'use client';

import { useState } from 'react';

interface ExpandableDescriptionProps {
  content: string;
}

export default function ExpandableDescription({ content }: ExpandableDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 300;
  
  const shouldTruncate = content.length > MAX_LENGTH;
  const displayContent = isExpanded || !shouldTruncate 
    ? content 
    : content.slice(0, MAX_LENGTH) + '...';

  if (!shouldTruncate) {
    return (
      <p className="text-gray-700 leading-relaxed">
        {content || 'No description available for this game.'}
      </p>
    );
  }

  return (
    <div>
      <p className="text-gray-700 leading-relaxed mb-3">
        {displayContent}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 flex items-center gap-1"
      >
        {isExpanded ? (
          <>
            <span>View less</span>
            <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </>
        ) : (
          <>
            <span>View more</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </>
        )}
      </button>
    </div>
  );
}