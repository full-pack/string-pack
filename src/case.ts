/**
 * Capitalizes the first letter of a word in a string.
 * @param {string} str - The input string.
 * @returns {string} The string with the first letter capitalized.
 * @example
 * capitalizeInitial('hello'); // 'Hello'
 * capitalizeInitial(':> hello');  // ':> Hello'
 */
function capitalizeInitial(str: string): string {
    return str.replace(/\b\w/, (char: string) => char.toUpperCase())
}

/**
 * Capitalizes the first letter of each word in a given string.
 * @param {string} str - The input string containing words to be capitalized.
 * @returns {string} Returns the input string with the first letter of each word capitalized.
 * @example
 * capitalizeWords('hello world');
 * // 'Hello World'
 * capitalizeWords('Sphinx of black quartz:-judge my vow');
 * // 'Sphinx Of Black Quartz:-Judge My Vow'
 */
function capitalizeWords(str: string): string {
    return str.replace(/\b\w/g, (char: string) => char.toUpperCase())
}

export { capitalizeWords, capitalizeInitial }
