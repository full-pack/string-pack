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
