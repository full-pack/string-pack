/**
 * Pads the start (left) of a string with a specified fill string a certain number of times.
 * @param {string} val - The original string.
 * @param {string} fillString - The string to use for padding. (default is ' ' | `U+0020` | single whitespace).
 * @param {number} repeatCount - The number of times to repeat the fill string (default is 1).
 * @param {number} maxLen - The maximum length of the resulting string (optional).
 * @returns {string} The padded string.
 * @example
 * // Basic Usage
 * padStart('hello', 'abc', 3) // abcabcabchello
 *
 * // Limiting total length
 * padStart('hello', 'abc', 3, 8) // abchello
 */
function padStart(val: string, fillString: string = '\u0020', repeatCount: number = 1, maxLen?: number): string {
    if (typeof maxLen !== 'undefined' && maxLen <= val.length) return val
    else if (typeof maxLen === 'undefined') {
        for (let i = 0; i < repeatCount; i++) val = fillString + val
        return val
    }
    for (let i = 0; i < repeatCount && val.length <= maxLen; i++) val = fillString + val
    const finalVal = val.length > maxLen ? val.substring(Math.abs(maxLen - val.length)) : val
    return finalVal
}

/**
 * Pads the end (right) of a string with a specified fill string a certain number of times.
 * @param {string} val - The original string.
 * @param {string} fillString - The string to use for padding (default is ' ' | `U+0020` | single whitespace).
 * @param {number} repeatCount - The number of times to repeat the fill string (default is 1).
 * @param {number} maxLen - The maximum length of the resulting string (optional).
 * @returns {string} The padded string.
 * @example
 * // Basic Usage
 * padEnd('hello', 'abc', 3); // helloabcabcabc
 *
 * // Limiting total length
 * padEnd('hello', 'abc', 3, 8); // helloabc
 */
function padEnd(val: string, fillString: string = '\u0020', repeatCount: number = 1, maxLen?: number): string {
    if (typeof maxLen !== 'undefined' && maxLen <= val.length) return val
    else if (typeof maxLen === 'undefined') {
        for (let i = 0; i < repeatCount; i++) val += fillString
        return val
    }
    for (let i = 0; i < repeatCount && val.length <= maxLen; i++) val += fillString
    return val.substring(0, maxLen)
}

/**
 * Pads a string with a specified fill string a certain number of times on both ends.
 * @param {string} val - The original string.
 * @param {string} fillString - The string to use for padding (default is ' ' | `U+0020` | single whitespace).
 * @param {number} repeatCount - The number of times to repeat the fill string (default is 1).
 * @param {number} maxLen - The maximum length of the resulting string (optional).
 * @param {string} bias - To control the distribution of padding on both sides (optional) (default is 1).
 *
 * 0: More padding is given to the start of the string.
 *
 * 1: More padding is given to the end of the string (default).
 *
 * **NOTE: bias is only applied if maxlen is defined & odd length of string**
 * @returns {string} The padded string.
 *
 * @example
 * // Basic usage
 * padBidirectional('hello', '*', 2); // '**hello**'
 *
 * // Limiting total length
 * padBidirectional('world', '-', 3, 10); // '--world---'
 *
 * // Controlling padding distribution
 * padBidirectional('example', '*', 2, 10, 0); // '**example*'
 */
function padBidirectional(
    val: string,
    fillString: string = '\u0020',
    repeatCount: number = 1,
    maxLen?: number,
    bias: 0 | 1 = 1
): string {
    if (typeof maxLen !== 'undefined' && maxLen <= val.length) return val
    if (typeof maxLen !== 'undefined') {
        const remainingSpace = maxLen - val.length
        const totalFillLen = fillString.length * repeatCount * 2
        let pad = ''
        for (let i = 0; i < repeatCount; i++) pad += fillString
        if (remainingSpace < totalFillLen) {
            if ((remainingSpace / 2) % 1 === 0)
                val = pad.substring(pad.length - remainingSpace / 2) + val + pad.substring(0, remainingSpace / 2)
            else if (bias === 0)
                val =
                    pad.substring(pad.length - Math.ceil(remainingSpace / 2)) +
                    val +
                    pad.substring(0, Math.floor(remainingSpace / 2))
            else
                val =
                    pad.substring(pad.length - Math.floor(remainingSpace / 2)) +
                    val +
                    pad.substring(0, Math.ceil(remainingSpace / 2))
            return val
        }
    }
    for (let i = 0; i < repeatCount; i++) val = fillString + val + fillString
    return val
}

export { padStart, padEnd, padBidirectional }
