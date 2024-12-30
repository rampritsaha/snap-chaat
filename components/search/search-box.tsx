'use client';

import { useState, useRef, KeyboardEvent } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useSpellCheck } from '@/hooks/use-spell-check';
import { SearchSuggestions } from './search-suggestions';
import { cn } from '@/lib/utils';

interface SearchBoxProps {
  onSearch: (query: string) => void;
  className?: string;
}

export function SearchBox({ onSearch, className }: SearchBoxProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { getSuggestions, checkSpelling } = useSpellCheck();

  const handleInputChange = (value: string) => {
    setQuery(value);
    setSuggestions(value ? getSuggestions(value) : []);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim()) {
      const correctedQuery = checkSpelling(query.trim());
      onSearch(correctedQuery);
      setQuery('');
      setSuggestions([]);
    }
  };

  const handleClear = () => {
    setQuery('');
    setSuggestions([]);
    inputRef.current?.focus();
  };

  const handleSuggestionClick = (suggestion: string) => {
    onSearch(suggestion);
    setQuery('');
    setSuggestions([]);
  };

  return (
    <div className={cn("w-full space-y-2", className)}>
      <div className="relative flex items-center">
        <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search menu items..."
          className="pl-9 pr-9"
          aria-label="Search menu items"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 h-7 w-7"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      <SearchSuggestions 
        suggestions={suggestions}
        onSelect={handleSuggestionClick}
      />
    </div>
  );
}