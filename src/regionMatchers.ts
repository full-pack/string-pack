interface StringRegion {
    str: string
    start?: number
    end?: number
}

/**
 * Compares two strings or regions for equality.
 * @param {StringRegion | string} str1 - The first string or region to compare.
 * @param {StringRegion | string} str2 - The second string or region to compare.
 * @param {number} start - The starting index of the region in the first string (optional).
 * @param {number} end - The ending index of the region in the first string (optional).
 * @returns {boolean} True if the strings or regions match, false otherwise.
 *
 * **Note: `end` index is not taken in consideration**
 * @example
 * // Matching identical strings
 * regionMatch('hello', 'hello'); // true
 *
 * // Matching identical regions in strings
 * const str1 = { str: 'hello world', start: 0, end: 5 };
 * const str2 = { str: 'hello there', start: 0, end: 5 };
 * regionMatch(str1, str2); // true
 * // OR
 * regionMatch('hello world', 'hello there', 0, 5) // true
 *
 * // Not matching regions
 * regionMatch('hello world', 'hello there', 6, 11); // false
 *
 * // Matching regions with different ending points
 * const str5 = { str: ' hello world', start: 1, end: 6 };
 * const str6 = { str: 'hello there', start: 0, end: 5 };
 * regionMatch(str5, str6); // true
 */
function regionMatch(str1: StringRegion | string, str2: StringRegion | string, start?: number, end?: number): boolean {
    const ZERO_IDX = 0
    // Normalizing Inputs
    // Strings to StringRegion
    if (typeof str1 === 'string') {
        const e = end ?? str1.length
        str1 = { str: str1, start, end: e }
    }
    if (typeof str2 === 'string') {
        const e = end ?? str2.length
        str2 = { str: str2, start, end: e }
    }

    // Zero indexing for both strings if undefined
    str1.start ??= ZERO_IDX
    str2.start ??= ZERO_IDX

    return str1.str.substring(str1.start, str1.end) === str2.str.substring(str2.start, str2.end)
}

/**
 * Performs a loose comparison of two strings or regions for equality.
 * @param {StringRegion | string} str1 - The first string or region to compare.
 * @param {StringRegion | string} str2 - The second string or region to compare.
 * @param {number} [start] - The starting index of the region in the first string (optional).
 * @param {number} [end] - The ending index of the region in the first string (optional).
 * @returns {boolean} True if the strings or regions match loosely, false otherwise.
 * @example
 * // Loose matching identical strings
 * looseRegionMatch('hello', 'HeLLo'); // true
 *
 * // Loose matching identical regions in strings
 * const str1 = { str: 'Hello worlD', start: 0, end: 5 };
 * const str2 = { str: 'heLLo there', start: 0, end: 5 };
 * looseRegionMatch(str1, str2); // true
 * // OR
 * looseRegionMatch('hellO world', 'Hello there', 0, 5) // true
 *
 * // Loose matching regions with different ending points
 * const str5 = { str: ' hellO world', start: 1, end: 6 };
 * const str6 = { str: 'HelLo there', start: 0, end: 5 };
 * looseRegionMatch(str5, str6); // true
 */
/* eslint-disable-next-line @typescript-eslint/max-params -- locales parameter enhances user accessibility and internationalization support */
function looseRegionMatch(
    str1: StringRegion | string,
    str2: StringRegion | string,
    start?: number,
    end?: number,
    locales?: Intl.LocalesArgument
): boolean {
    if (typeof str1 === 'string') {
        const e = end ?? str1.length
        str1 = { str: str1.toLocaleLowerCase(locales), start, end: e }
    } else str1.str = str1.str.toLocaleLowerCase(locales)

    if (typeof str2 === 'string') {
        const e = end ?? str2.length
        str2 = { str: str2.toLocaleLowerCase(locales), start, end: e }
    } else str2.str = str2.str.toLocaleLowerCase(locales)

    return regionMatch(str1, str2)
}

export { regionMatch, looseRegionMatch, type StringRegion }
