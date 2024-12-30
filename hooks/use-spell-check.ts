'use client';

import { menuItems } from '@/data/menu';
import { findSimilarWords } from '@/lib/spell-check/word-similarity';

export function useSpellCheck() {
  const itemNames = menuItems.map(item => item.name);
  const itemWords = itemNames.reduce((words: string[], name) => {
    return [...words, ...name.split(' ')];
  }, []);

  const checkSpelling = (input: string): string => {
    // Split input into words
    const words = input.split(' ');
    
    // Process each word
    const correctedWords = words.map(word => {
      const suggestions = findSimilarWords(word, itemWords);
      return suggestions.length > 0 ? suggestions[0] : word;
    });

    // Try to match the corrected phrase with menu items
    const correctedPhrase = correctedWords.join(' ');
    const exactMatch = menuItems.find(
      item => item.name.toLowerCase() === correctedPhrase.toLowerCase()
    );
    
    if (exactMatch) return exactMatch.name;

    // If no exact match, look for partial matches
    const similarItems = menuItems.filter(item => 
      item.name.toLowerCase().includes(correctedPhrase.toLowerCase())
    );
    
    return similarItems.length > 0 ? similarItems[0].name : correctedPhrase;
  };

  const getSuggestions = (input: string): string[] => {
    if (!input.trim()) return [];

    // Split input into words
    const words = input.trim().split(' ');
    
    // Get suggestions for the last word
    const lastWord = words[words.length - 1];
    const wordSuggestions = findSimilarWords(lastWord, itemWords);

    // Create complete phrases using the suggestions
    const previousWords = words.slice(0, -1);
    return wordSuggestions
      .map(suggestion => [...previousWords, suggestion].join(' '))
      .filter(phrase => 
        menuItems.some(item => 
          item.name.toLowerCase().includes(phrase.toLowerCase())
        )
      );
  };

  return { checkSpelling, getSuggestions };
}