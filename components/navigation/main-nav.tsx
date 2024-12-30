'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', label: 'Menu' },
  { href: '/reservations', label: 'Reservations' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export function MainNav() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <nav className="relative flex items-center space-x-4 px-4">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'px-4 py-3 text-sm font-medium transition-colors relative rounded-md',
              {
                'text-primary-foreground': isActive,
                'text-foreground/60 hover:text-foreground': !isActive,
              }
            )}
            onMouseEnter={() => setHoveredPath(item.href)}
            onMouseLeave={() => setHoveredPath(pathname)}
          >
            {item.label}
            {hoveredPath === item.href && (
              <motion.div
                className="absolute inset-0 bg-primary/15 rounded-md -z-10"
                layoutId="navbar-tab"
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  duration: 0.3
                }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}