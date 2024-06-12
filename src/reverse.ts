/**
 * Reverses the sequence of characters in given string.
 * @example
 * reverse('tac'); // 'cat'
 */
export function reverse(str: string): string {
    return str.split('').reverse().join('')
}
