/**
 * Take each word from a text and capitalize, after each space
 */
export function capitalize(phrase: string): string {
  return phrase.split(' ').map(capitalizeWord).join(' ');
}

function capitalizeWord(word: string): string {
  const [firstLetter, ...rest] = word.toLowerCase();

  return firstLetter.toUpperCase().concat(...rest);
}
