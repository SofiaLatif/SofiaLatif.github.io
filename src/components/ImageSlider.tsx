'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageData {
  src: string;
  legend: string;
}

interface ImageSliderProps {
  images: ImageData[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (isPaused || isZoomed) return;
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused, isZoomed]);

  return (
    <>
      <div 
        className="relative group w-full h-full bg-white dark:bg-zinc-900 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 cursor-zoom-in"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={() => setIsZoomed(true)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={`Figure ${currentIndex + 1}`}
            className="object-contain w-full h-full p-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* Overlay Legend (Brief) */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[10px] p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="line-clamp-2">{images[currentIndex].legend}</p>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute top-2 right-2 flex space-x-1 z-10">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index === currentIndex ? 'bg-emerald-600' : 'bg-zinc-300/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-2/3 bg-white flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800">
                <img 
                  src={images[currentIndex].src} 
                  alt={images[currentIndex].legend} 
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>
              <div className="md:w-1/3 p-6 overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100">Figure {currentIndex + 1}</h3>
                  <button 
                    onClick={() => setIsZoomed(false)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="prose dark:prose-invert">
                  <p className="text-gray-700 dark:text-zinc-300 leading-relaxed text-sm">
                    {images[currentIndex].legend}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex justify-between">
                   <button 
                    onClick={prevSlide}
                    className="flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    Précédent
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700"
                  >
                    Suivant
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
