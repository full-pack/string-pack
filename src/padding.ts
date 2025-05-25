enum PaddingBias {
    START = 0,
    END = 1
}

interface PaddingOptions {
    repeatCount?: number
    maxLen?: number
    bias?: PaddingBias
}

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
function padStart(val: string, fillString = '\u0020', repeatCount = 1, maxLen?: number): string {
    const padding = fillString.repeat(repeatCount)
    if (typeof maxLen === 'undefined') return padding + val
    if (maxLen <= val.length) return val

    const remSpace = maxLen - val.length
    return padding.slice(-remSpace) + val
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
function padEnd(val: string, fillString = '\u0020', repeatCount = 1, maxLen?: number): string {
    const padding = fillString.repeat(repeatCount)
    if (typeof maxLen === 'undefined') return val + padding
    if (maxLen <= val.length) return val

    const remSpace = maxLen - val.length
    return val + padding.substring(0, remSpace)
}

/**
 * Pads a string with a specified fill string a certain number of times on both ends.
 * @param {string} val - The original string.
 * @param {string} fillString - The string to use for padding (default is ' ' | `U+0020` | single whitespace).
 * @param {number} PaddingOptions.repeatCount - The number of times to repeat the fill string (default is 1).
 * @param {number} PaddingOptions.maxLen - The maximum length of the resulting string (optional).
 * @param {PaddingBias} PaddingOptions.bias - To control the distribution of padding on both sides (optional) (default is 1).
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
 * padBidirectional('hello', '*', {repeatCount: 2}); // '**hello**'
 *
 * // Limiting total length
 * padBidirectional('world', '-', {repeatCount: 3, maxLen: 10}); // '--world---'
 *
 * // Controlling padding distribution
 * padBidirectional('example', '*', {repeatCount: 2, maxLen: 10, bias: PaddingBias.START}); // '**example*'
 */
function padBidirectional(val: string, fillString = '\u0020', paddingOptions: PaddingOptions = {}): string {
    const { repeatCount = 1, maxLen, bias = PaddingBias.END } = paddingOptions
    const padding = fillString.repeat(repeatCount)
    let start = padding
    let end = padding
    if (typeof maxLen !== 'undefined') {
        if (maxLen <= val.length) return val

        const remainingSpace = maxLen - val.length
        const totalFillerLength = padding.length * 2
        const halfSpace = remainingSpace / 2
        const isEven = halfSpace % 1 === 0

        if (remainingSpace < totalFillerLength) {
            if (isEven) {
                start = padding.substring(padding.length - halfSpace)
                end = padding.substring(0, halfSpace)
            } else if (bias === PaddingBias.START) {
                start = padding.substring(padding.length - Math.ceil(halfSpace))
                end = padding.substring(0, Math.floor(halfSpace))
            } else {
                start = padding.substring(padding.length - Math.floor(halfSpace))
                end = padding.substring(0, Math.ceil(halfSpace))
            }
        }
    }
    return start + val + end
}

export { padStart, padEnd, padBidirectional, PaddingBias, type PaddingOptions }
