'use client';

import { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  term: string;
  definition: string;
}

export default function Tooltip({ term, definition }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <span className="relative inline group">
      <span
        className="cursor-help border-b border-dotted border-emerald-500 text-emerald-700 dark:text-emerald-400 font-medium inline"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
      >
        {term}
      </span>
      {isVisible && (
        <span
          ref={tooltipRef}
          className="absolute z-[100] w-64 p-3 text-sm text-white bg-zinc-800 dark:bg-zinc-700 rounded-lg shadow-2xl left-1/2 -translate-x-1/2 bottom-[calc(100%+8px)] pointer-events-none block"
        >
          <span className="relative z-10 block">{definition}</span>
          <span className="absolute w-3 h-3 bg-zinc-800 dark:bg-zinc-700 rotate-45 -bottom-1.5 left-1/2 -translate-x-1/2 block"></span>
        </span>
      )}
    </span>
  );
}
