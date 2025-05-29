/**
 * Performs a strict comparison between two strings.
 */
function compare(str1: string, str2: string): boolean {
    return str1 === str2
}

/**
 * Performs a case-insensitive loose comparison between two strings.
 */
function looseCompare(str1: string, str2: string, locales?: Intl.LocalesArgument): boolean {
    return str1.toLocaleLowerCase(locales) === str2.toLocaleLowerCase(locales)
}

export { compare, looseCompare }
