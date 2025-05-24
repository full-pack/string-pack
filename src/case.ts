import { getWords } from './.internal/getWords'

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

/**
 * Checks if a string is in snake_case format.
 * @param {string} str - The string to be checked.
 * @param {boolean} alphanumeric - If true, allows numbers in the string.
 * @returns {boolean} - True if the string is in snake_case format, false otherwise.
 * -----
 * ### Conventions
 * - Use lowercase letters.
 * - Separate words with underscores ("_").
 * - *No numbers allowed, unless specified otherwise.*
 * -----
 * @example
 * // Valid
 * isSnakeCase('snake_case_example'); // true
 * isSnakeCase('hello_world'); // true
 *
 * // Valid with alphanumeric flag
 * isSnakeCase('with_1234', true); // true
 * isSnakeCase('pi_3_14', true); // true
 *
 * // Invalid
 * isSnakeCase('123at_start'); // false
 * isSnakeCase(' no_space_allowed'); // false
 * isSnakeCase('no_CAPS'); // false
 */
function isSnakeCase(str: string, alphanumeric = false): boolean {
    const snakeCase = /^[a-z]+(_[a-z]+)*$/
    const snakeCaseWithNumbers = /^([a-z][0-9]*)+(?:_[a-z0-9]+)*$/
    return alphanumeric ? snakeCaseWithNumbers.test(str) : snakeCase.test(str)
}

/**
 * Checks if a string is in kebab-case format.
 * @param {string} str - The string to be checked.
 * @param {boolean} alphanumeric - If true, allows numbers in the string.
 * @returns {boolean} True if the string is in kebab-case format, false otherwise.
 * -----
 * ### Conventions
 * - Use lowercase letters.
 * - Separate words with hyphens ("-").
 * - *No numbers allowed, unless specified otherwise.*
 * -----
 * @example
 * // Valid
 * isKebabCase('kebab-case-example'); // true
 * isKebabCase('hello-world'); // true
 *
 * // Valid with alphanumeric flag
 * isKebabCase('with-1234', true); // true
 * isKebabCase('pi-3-14', true); // true
 *
 * // Invalid
 * isKebabCase('123at-start'); // false
 * isKebabCase(' no-space-allowed'); // false
 * isKebabCase('no-CAPS'); // false
 */
function isKebabCase(str: string, alphanumeric = false): boolean {
    const kebabCase = /^[a-z]+(-[a-z]+)*$/
    const kebabCaseWithNumbers = /^([a-z][0-9]*)+(?:-[a-z0-9]+)*$/
    return alphanumeric ? kebabCaseWithNumbers.test(str) : kebabCase.test(str)
}

/**
 * Checks if a string is in camelCase format.
 * @param {string} str - The string to be checked.
 * @returns {boolean} True if the string is in camelCase format, false otherwise.
 * -----
 * ### Conventions
 * - Start with a lowercase letter.
 * - Use uppercase for each new word.
 * - Should consist of only letters.
 * - No separator between words allowed.
 * - No numbers allowed.
 * -----
 * @example
 * // Valid
 * isCamelCase('camelCaseExample'); // true
 * isCamelCase('helloWorld'); // true
 *
 * // Invalid
 * isCamelCase('CAMEL'); // false
 * isCamelCase(' noSpaceAllowed'); // false
 * isCamelCase('withThe1234'); // false
 */
function isCamelCase(str: string): boolean {
    return /^[a-z]+[a-zA-Z]*$/.test(str)
}

/**
 * Checks if a string is in PascalCase format.
 * @param {string} str - The string to be checked.
 * @returns {boolean} True if the string is in PascalCase format, false otherwise.
 * -----
 * ### Conventions
 * - Start with an uppercase letter.
 * - Use uppercase for each new word.
 * - Should consist of only letters.
 * - No separator between words allowed.
 * - No numbers allowed.
 * -----
 * @example
 * // Valid
 * isPascalCase('PascalCaseExample'); // true
 * isPascalCase('HelloWorld'); // true
 *
 * // Invalid
 * isPascalCase('PASCAL'); // false
 * isPascalCase(' NoSpaceAllowed');; // false
 * isPascalCase('WithThe1234'); // false
 */
function isPascalCase(str: string): boolean {
    return /^[A-Z][a-z]+[a-zA-Z]*$/.test(str)
}

/**
 * Converts a string to snake_case format.
 * @param {string} str The string to be converted.
 * @param {boolean} inWords If true, converts numbers to words in snake_case format.
 * @returns {string} The string converted to snake_case format.
 * @example
 * snakeCase('hello WorLd'); // 'hello_world'
 * snakeCase('from-kebab-case'); // 'from_kebab_case'
 * snakeCase('snake Case With Numbers123', true); // 'snake_case_with_numbers_one_two_three'
 */
function snakeCase(str: string, inWords = false): string {
    if (isCamelCase(str)) return getWords(str, 'camel').join('_').toLowerCase()
    if (isPascalCase(str)) return getWords(str, 'pascal').join('_').toLowerCase()

    const numbersInWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    if (inWords) {
        for (let i = 0; i < numbersInWords.length; i++) {
            str = str.replace(RegExp(i.toString(), 'g'), (_char: string) => ' ' + numbersInWords[i] + ' ')
        }
    }

    return getWords(str).join('_').toLowerCase()
}

/**
 * Converts a string to kebab-case format.
 * @param {string} str The string to be converted.
 * @param {boolean} inWords If true, converts numbers to words in kebab-case format.
 * @returns {string} The string converted to kebab-case format.
 * @example
 * kebabCase('h3llo WoRld'); // 'h3llo-world'
 * kebabCase('from_snake_case'); // 'from-snake-case'
 * kebabCase('kebab Case With Numbers123', true); // 'kebab-case-with-numbers-one-two-three'
 */
function kebabCase(str: string, inWords = false): string {
    if (isCamelCase(str)) return getWords(str, 'camel').join('-').toLowerCase()
    if (isPascalCase(str)) return getWords(str, 'pascal').join('-').toLowerCase()

    const numbersInWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    if (inWords) {
        for (let i = 0; i < numbersInWords.length; i++) {
            str = str.replace(RegExp(i.toString(), 'g'), (_char: string) => ' ' + numbersInWords[i] + ' ')
        }
    }

    return getWords(str).join('-').toLowerCase()
}

/**
 * Converts a string to camelCase format.
 * @param {string} str The string to be converted.
 * @returns {string} The string converted to camelCase format.
 * @example
 * camelCase('hello WoRld'); // 'helloWorld'
 * camelCase('Test CaSe ExamplE'); // 'testCaseExample'
 * camelCase('camel Case With Numbers123'); // 'camelCaseWithNumbers'
 */
function camelCase(str: string): string {
    str = str.replace(/[^a-zA-Z]/g, ' ')
    if (isCamelCase(str)) return str
    if (isPascalCase(str)) return str.charAt(0).toLowerCase() + str.substring(1)
    return getWords(str).reduce((prev: string, curVal: string, i: number): string =>
        i !== 1
            ? prev + curVal.charAt(0).toUpperCase() + curVal.substring(1).toLowerCase()
            : prev.toLowerCase() + curVal.charAt(0).toUpperCase() + curVal.substring(1).toLowerCase()
    )
}

/**
 * Converts a string to PascalCase format.
 * @param {string} str The string to be converted.
 * @returns {string} The string converted to PascalCase format.
 * @example
 * pascalCase('hello WoRld'); // 'HelloWorld'
 * pascalCase('Test CaSe ExamplE'); // 'TestCaseExample'
 * pascalCase('pasCal Case With Numbers123'); // 'PascalCaseWithNumbers'
 */
function pascalCase(str: string): string {
    str = str.replace(/[^a-zA-Z]/g, ' ')
    if (isPascalCase(str)) return str
    if (isCamelCase(str)) return str.charAt(0).toUpperCase() + str.substring(1)
    return getWords(str).reduce(
        (prev: string, curVal: string): string =>
            prev + curVal.charAt(0).toUpperCase() + curVal.substring(1).toLowerCase(),

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
