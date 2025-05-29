import { getWords } from './.internal/getWords'

/**
 * Capitalizes the first letter of a word in a string.
 */
function capitalizeInitial(str: string, locales?: Intl.LocalesArgument): string {
    return str.replace(/\b\w/, (char: string) => char.toLocaleUpperCase(locales))
}

/**
 * Capitalizes the first letter of each word in a given string.
 */
function capitalizeWords(str: string, locales?: Intl.LocalesArgument): string {
    return str.replace(/\b\w/g, (char: string) => char.toLocaleUpperCase(locales))
}

/**
 * Checks if a string is in snake_case format.
 */
function isSnakeCase(str: string, alphanumeric = false): boolean {
    const snakeCase = /^[a-z]+(_[a-z]+)*$/
    const snakeCaseWithNumbers = /^([a-z][0-9]*)+(?:_[a-z0-9]+)*$/
    return alphanumeric ? snakeCaseWithNumbers.test(str) : snakeCase.test(str)
}

/**
 * Checks if a string is in kebab-case format.
 */
function isKebabCase(str: string, alphanumeric = false): boolean {
    const kebabCase = /^[a-z]+(-[a-z]+)*$/
    const kebabCaseWithNumbers = /^([a-z][0-9]*)+(?:-[a-z0-9]+)*$/
    return alphanumeric ? kebabCaseWithNumbers.test(str) : kebabCase.test(str)
}

/**
 * Checks if a string is in camelCase format.
 */
function isCamelCase(str: string): boolean {
    return /^[a-z]+[a-zA-Z]*$/.test(str)
}

/**
 * Checks if a string is in PascalCase format.
 */
function isPascalCase(str: string): boolean {
    return /^[A-Z][a-z]+[a-zA-Z]*$/.test(str)
}

/**
 * Converts a string to snake_case format.
 */
function snakeCase(str: string, inWords = false, locales?: Intl.LocalesArgument): string {
    if (isCamelCase(str)) return getWords(str, 'camel').join('_').toLocaleLowerCase(locales)
    if (isPascalCase(str)) return getWords(str, 'pascal').join('_').toLocaleLowerCase(locales)

    const numbersInWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    if (inWords) {
        for (let i = 0; i < numbersInWords.length; i++) {
            str = str.replace(RegExp(i.toString(), 'g'), () => ' ' + numbersInWords[i] + ' ')
        }
    }

    return getWords(str).join('_').toLocaleLowerCase(locales)
}

/**
 * Converts a string to kebab-case format.
 */
function kebabCase(str: string, inWords = false, locales?: Intl.LocalesArgument): string {
    if (isCamelCase(str)) return getWords(str, 'camel').join('-').toLocaleLowerCase(locales)
    if (isPascalCase(str)) return getWords(str, 'pascal').join('-').toLocaleLowerCase(locales)

    const numbersInWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    if (inWords) {
        for (let i = 0; i < numbersInWords.length; i++) {
            str = str.replace(RegExp(i.toString(), 'g'), () => ' ' + numbersInWords[i] + ' ')
        }
    }

    return getWords(str).join('-').toLocaleLowerCase(locales)
}

/**
 * Converts a string to camelCase format.
 */
function camelCase(str: string, locales?: Intl.LocalesArgument): string {
    str = str.replace(/[^a-zA-Z]/g, ' ')
    if (isCamelCase(str)) return str
    if (isPascalCase(str)) return str.charAt(0).toLocaleLowerCase(locales) + str.substring(1)
    return getWords(str).reduce((prev: string, curVal: string, i: number): string =>
        i !== 1
            ? prev + curVal.charAt(0).toLocaleUpperCase(locales) + curVal.substring(1).toLocaleLowerCase(locales)
            : prev.toLocaleLowerCase(locales) +
              curVal.charAt(0).toLocaleUpperCase(locales) +
              curVal.substring(1).toLocaleLowerCase(locales)
    )
}

/**
 * Converts a string to PascalCase format.
 */
function pascalCase(str: string, locales?: Intl.LocalesArgument): string {
    str = str.replace(/[^a-zA-Z]/g, ' ')
    if (isPascalCase(str)) return str
    if (isCamelCase(str)) return str.charAt(0).toLocaleUpperCase(locales) + str.substring(1)
    return getWords(str).reduce(
        (prev: string, curVal: string): string =>
            prev + curVal.charAt(0).toLocaleUpperCase(locales) + curVal.substring(1).toLocaleLowerCase(locales),

        ''
    )
}

export {
    capitalizeWords,
    capitalizeInitial,
    isSnakeCase,
    isKebabCase,
    isCamelCase,
    isPascalCase,
    snakeCase,
    kebabCase,
    camelCase,
    pascalCase
}
