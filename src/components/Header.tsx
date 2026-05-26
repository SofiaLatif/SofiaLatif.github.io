'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Remerciements', path: '/remerciements' },
  { name: 'Ressources', path: '/ressources' },
];

export default function Header() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-gray-200 dark:bg-black dark:border-zinc-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="text-xl font-bold text-emerald-700 dark:text-emerald-500">
            <img src="/icons8-accueil-384.png" alt="Accueil" className="h-8 w-8 object-contain" />
          </Link>
        </div>
        <div className="hidden sm:flex sm:space-x-4 h-full">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const isHovered = hoveredPath === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                onMouseEnter={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(null)}
                className={`relative flex items-center px-4 text-sm font-medium transition-colors h-full ${
                  isActive
                    ? 'text-emerald-700 dark:text-emerald-500'
                    : 'text-gray-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 dark:bg-emerald-500 z-20"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Hover Indicator (Sliding Bar) */}
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="hoverIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400/50 dark:bg-emerald-400/30 z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>
        <div className="sm:hidden">
          {/* Mobile menu button could go here */}
        </div>
      </nav>
    </header>
  );
}
