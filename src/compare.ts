/**
 * Performs a strict comparison between two strings.
 * @param {string} str1 - The first string for comparison.
 * @param {string} str2 - The second string for comparison.
 * @returns {boolean} Returns true if the strings are equal; otherwise, false.
 *
 * @example
 * compare("hello", "hello"); // true
 *
 * compare("abc", "ABC"); // false
 *
 * @description
 * The `compare` function performs a case-sensitive strict comparison between two strings.
 */
function compare(str1: string, str2: string): boolean {
    return str1 === str2
}

/**
 * Performs a case-insensitive loose comparison between two strings.
 * @param {string} str1 - The first string for comparison.
 * @param {string} str2 - The second string for comparison.
 * @returns {boolean} Returns true if the strings are equal (case-insensitive); otherwise, false.
 *
 * @example
 * looseCompare("hello", "HELLO"); // true
 *
 * looseCompare("abc", "123"); // false
 *
 * @description
 * The `looseCompare` function performs a case-insensitive loose comparison between two strings.
 */
function looseCompare(str1: string, str2: string, locales?: Intl.LocalesArgument): boolean {
    return str1.toLocaleLowerCase(locales) === str2.toLocaleLowerCase(locales)
}

export { compare, looseCompare }
