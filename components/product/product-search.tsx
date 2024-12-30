'use client';

import { useState, KeyboardEvent } from 'react';
import { Input } from '../ui/input';
import { useSpellCheck } from '@/hooks/use-spell-check';

interface ProductSearchProps {
  onSearch: (query: string) => void;
}

export function ProductSearch({ onSearch }: ProductSearchProps) {
  const [query, setQuery] = useState('');
  const { getSuggestions } = useSpellCheck();
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim()) {
      onSearch(query.trim());
      setQuery('');
      setSuggestions([]);
    }
  };

  const handleChange = (value: string) => {
    setQuery(value);
    if (value.trim()) {
      setSuggestions(getSuggestions(value));
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="space-y-2">
      <Input
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter item name..."
        className="w-full"
      />
      {suggestions.length > 0 && (
        <div className="text-sm text-muted-foreground">
          Did you mean: {suggestions.join(', ')}?
        </div>
      )}
    </div>
  );
}