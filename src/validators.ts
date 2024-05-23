/**
 * Checks if a string contains only alphabetic characters (A-Z, a-z).
 * @param {string} str The string to check.
 * @returns {boolean} True if only alphabetic characters, false otherwise.
 * @example
 * isAlpha("HelloWorld"); // true
 * isAlpha("Hello123"); // false
 */
function isAlpha(str: string): boolean {
    return /^(?=.*[a-zA-Z])[A-Za-z]+$/.test(str)
}

/**
 * Checks if a string contains only alphanumeric characters (A-Z, a-z, 0-9).
 * @param {string} str The string to check.
 * @returns {boolean} True if only alphanumeric characters, false otherwise.
 * @example
 * isAlphaNumeric("Hello01"); // true
 * isAlphaNumeric("1234567890"); // false
 */
function isAlphaNumeric(str: string): boolean {
    return /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/.test(str)
}

export { isAlpha, isAlphaNumeric }
