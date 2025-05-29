/**
 * Merges array(s) of strings into a single string using a specified separator.
 */
function merge(sep: string | boolean, ...strings: string[] | string[][]): string {
    strings = strings.flat()
    if (typeof sep === 'boolean') {
        const separator = sep ? ' ' : ''
        return strings.length === 0 ? separator : strings.join(separator)
    }
    if (strings.length === 0) return sep
    return strings.join(sep)
}

export { merge }
