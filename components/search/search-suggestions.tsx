'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

interface SearchSuggestionsProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

export function SearchSuggestions({ suggestions, onSelect }: SearchSuggestionsProps) {
  if (!suggestions.length) return null;

  return (
    <ScrollArea className="h-[120px] w-full rounded-md border bg-background">
      <div className="p-2">
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            variant="ghost"
            className="w-full justify-start text-left font-normal"
            onClick={() => onSelect(suggestion)}
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
}