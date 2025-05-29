/**
 * Checks if a string contains only alphabetic characters (A-Z, a-z).
 */
function isAlpha(str: string): boolean {
    return /^(?=.*[a-zA-Z])[A-Za-z]+$/.test(str)
}

/**
 * Checks if a string contains only alphanumeric characters (A-Z, a-z, 0-9).
 */
function isAlphaNumeric(str: string): boolean {
    return /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/.test(str)
}

export { isAlpha, isAlphaNumeric }
