'use client';

import { useState, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  description: string | React.ReactNode;
}

export default function ImageModal({ isOpen, onClose, imageSrc, title, description }: ModalProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        setShouldRender(true);
        setIsClosing(false);
      });
    } else if (shouldRender) {
      requestAnimationFrame(() => {
        setIsClosing(true);
      });
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isMounted || !shouldRender) return null;

  return (
    <div className={`fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md ${isClosing ? 'animate-modal-backdrop-out' : 'animate-modal-backdrop'}`}>
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-emerald-400 transition-colors z-[160]"
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className={`max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl flex flex-col md:flex-row ${isClosing ? 'animate-modal-content-out' : 'animate-modal-content'}`}>
        <div className="md:w-1/2 bg-zinc-100 dark:bg-black p-4 flex items-center justify-center border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800 overflow-hidden">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={title} 
              className="max-w-full max-h-[70vh] object-contain rounded-lg transition-transform duration-700 hover:scale-105 cursor-zoom-in"
            />
          ) : (
            <div className="w-full h-64 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded-lg" />
          )}
        </div>
        <div className="md:w-1/2 p-8 overflow-y-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-50 mb-6 border-b border-emerald-100 dark:border-emerald-900 pb-4">
            {title}
          </h3>
          <div className="text-gray-700 dark:text-zinc-300 text-sm leading-relaxed space-y-4">
            {typeof description === 'string' 
              ? description.split('. ').filter(s => s.trim()).map((sentence, i) => (
                  <p key={i}>{sentence.endsWith('.') ? sentence : `${sentence}.`}</p>
                ))
              : description
            }
          </div>
        </div>
      </div>
    </div>
  );
}
