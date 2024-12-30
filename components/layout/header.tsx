'use client';

import { useState } from 'react';
import Link from 'next/link';
import { UtensilsCrossed, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../theme-toggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-20 bg-primary fixed top-0 z-50">
      <div className="h-full px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 text-white hover:text-white/90 transition-colors duration-300"
        >
          <UtensilsCrossed className="h-8 w-8" />
          <span className="text-2xl font-bold">Restaurant</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-white/85 transition-colors duration-300 py-4 px-2 text-base font-medium min-h-[44px] min-w-[44px] flex items-center"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center">
            <div className="sm:flex sm:gap-4">
              <ThemeToggle />
            </div>
          </div>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 min-h-[44px] min-w-[44px]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={cn(
                'absolute top-20 left-0 right-0 bg-[#800080] shadow-lg md:hidden',
                'border-t border-white/10'
              )}
            >
              <nav className="flex flex-col p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white hover:text-white/85 transition-colors duration-300 py-4 px-6 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
