'use client';

import { useEffect, useRef, useState } from 'react';

interface PDBVisualizerProps {
  pdbPath?: string;
  pdbId?: string;
  title?: string;
  description?: string | React.ReactNode;
}

declare global {
  interface Window {
    $3Dmol: {
      createViewer: (element: HTMLElement, config: { backgroundColor: string | number }) => {
        setBackgroundColor: (color: number, arg1: number) => void;
        addModel: (data: string, format: string) => void;
        setStyle: (arg0: object, arg1: object) => void;
        center: () => void;
        zoomTo: () => void;
        render: () => void;
      };
      download: (path: string, viewer: any, options: object, callback: () => void) => void;
    };
  }
}

export default function PDBVisualizer({ pdbPath, pdbId, title, description }: PDBVisualizerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.$3Dmol) {
      requestAnimationFrame(() => setScriptLoaded(true));
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://3Dmol.org/build/3Dmol-min.js';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!scriptLoaded || !containerRef.current) return;

    const element = containerRef.current;
    const viewer = window.$3Dmol.createViewer(element, {
      backgroundColor: 'white',
    });
    
    const isDark = document.documentElement.classList.contains('dark');
    viewer.setBackgroundColor(isDark ? 0x0a0a0a : 0xf9fafb, 0);

    const initializeViewer = (v: { setStyle: (arg0: object, arg1: object) => void; center: () => void; zoomTo: () => void; render: () => void; addModel: (data: string, format: string) => void }) => {
      v.setStyle({}, { cartoon: { color: 'spectrum' } });
      v.center();
      v.zoomTo();
      v.render();
      setIsLoaded(true);
    };

    if (pdbId) {
      window.$3Dmol.download(`pdb:${pdbId}`, viewer, {}, () => {
        initializeViewer(viewer);
      });
    } else if (pdbPath) {
      fetch(pdbPath)
        .then(res => res.text())
        .then(data => {
          viewer.addModel(data, "pdb");
          initializeViewer(viewer);
        });
    }

    return () => {
      // Viewer cleanup
    };
  }, [scriptLoaded, pdbId, pdbPath]);

  return (
    <div className="w-full space-y-2">
      {title && <h5 className="text-sm font-bold text-gray-700 dark:text-zinc-300 italic">{title}</h5>}
      <div className="relative aspect-square w-full bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-inner">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 z-10">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs text-zinc-500 font-medium italic">Chargement du modèle 3D...</p>
            </div>
          </div>
        )}
        <div ref={containerRef} className="w-full h-full" />
        
        <div className="absolute bottom-3 right-3 flex space-x-2">
           <span className="px-2 py-1 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded text-[10px] text-zinc-500 border border-zinc-200 dark:border-zinc-800 font-bold uppercase tracking-widest shadow-sm">
             Interactive 3D
           </span>
        </div>
      </div>
      <p className="text-[10px] text-center text-zinc-500 italic">
        Utilisez la souris pour faire pivoter, zoomer ou déplacer la molécule.
      </p>
      {description && (
        <div className="mt-4 p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-100 dark:border-zinc-800 text-xs text-gray-700 dark:text-zinc-300 leading-relaxed space-y-2">
          {description}
        </div>
      )}
    </div>
  );
}
