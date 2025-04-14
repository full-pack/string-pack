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
    if (typeof str1 === 'string' || typeof str2 === 'string') {
        start ??= ZERO_IDX
        if (typeof str1 === 'string') {
            const e = end ?? str1.length
            str1 = { str: str1, start, end: e }
        }
        if (typeof str2 === 'string') {
            const e = end ?? str2.length
            str2 = { str: str2, start, end: e }
        }
    }

    // Getting start and end for both strings
    const s1 = str1.start ?? ZERO_IDX
    const e1 = str1.end ?? str1.str.length

    const s2 = str2.start ?? ZERO_IDX
    const e2 = str2.end ?? str2.str.length

    return str1.str.substring(s1, e1) === str2.str.substring(s2, e2)
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
function looseRegionMatch(
    str1: StringRegion | string,
    str2: StringRegion | string,
    start?: number,
    end?: number
): boolean {
    if (typeof str1 === 'string') str1 = str1.toLowerCase()
    else str1.str = str1.str.toLowerCase()
    if (typeof str2 === 'string') str2 = str2.toLowerCase()
    else str2.str = str2.str.toLowerCase()

    return regionMatch(str1, str2, start, end)
}

export { regionMatch, looseRegionMatch, type StringRegion }
