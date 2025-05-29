interface StringRegion {
    str: string
    start?: number
    end?: number
}

/**
 * Compares two strings or regions for equality.
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
