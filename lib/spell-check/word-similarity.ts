import { levenshteinDistance } from './levenshtein';

export function findSimilarWords(input: string, dictionary: string[]): string[] {
  const MAX_DISTANCE = 2;
  const inputLower = input.toLowerCase();
  
  // First try exact match
  const exactMatch = dictionary.find(word => word.toLowerCase() === inputLower);
  if (exactMatch) return [exactMatch];

  // Then look for words that start with the input
  const startsWithMatches = dictionary.filter(word => 
    word.toLowerCase().startsWith(inputLower)
  );
  if (startsWithMatches.length > 0) return startsWithMatches;

  // Finally, use Levenshtein distance for fuzzy matching
  return dictionary.filter(word => {
    const distance = levenshteinDistance(inputLower, word.toLowerCase());
    // Adjust distance threshold based on word length
    const threshold = Math.min(MAX_DISTANCE, Math.floor(word.length * 0.3));
    return distance <= threshold;
  });
}