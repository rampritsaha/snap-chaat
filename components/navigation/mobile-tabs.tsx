'use client';

import { useState } from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const tabs: Tab[] = [
  { id: 'search', label: 'Search', icon: <Search className="h-5 w-5" /> },
  { id: 'cart', label: 'Cart', icon: <ShoppingCart className="h-5 w-5" /> },
  { id: 'menu', label: 'Menu', icon: <Menu className="h-5 w-5" /> },
];

interface MobileTabsProps {
  onTabChange: (tabId: string) => void;
}

export function MobileTabs({ onTabChange }: MobileTabsProps) {
  const [activeTab, setActiveTab] = useState('search');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t md:hidden">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full",
              "transition-colors duration-200",
              activeTab === tab.id
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            )}
            aria-label={tab.label}
            aria-selected={activeTab === tab.id}
          >
            {tab.icon}
            <span className="text-xs mt-1">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}