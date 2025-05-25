/**
 * Merges an array of strings into a single string using a specified separator.
 * @param {string | boolean} sep - The separator to use between merged strings.
 *   - Provide a string to use as a separator between strings.
 *   - Provide `false` or an empty string (`''`) for no separator.
 *   - Provide `true` for a space (`' '`) as the separator.
 * @param {string[]} strings - The array of strings to merge.
 * @returns {string} The merged string.
 *
 * @example
 * merge('-', 'apple', 'orange', 'banana'); // 'apple-orange-banana'
 *
 * merge(true, 'apple', 'orange'); // 'apple orange'
 *
 * merge(false, 'apple', 'orange', 'banana'); // 'appleorangebanana'
 *
 * @description
 * The `merge` function concatenates an array of strings into a single string with the specified separator.
 * - Use `sep` as a string for a custom separator between strings.
 * - Provide `false` or an empty string (`''`) for no separator.
 * - Provide `true` for a space (`' '`) as the separator.
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
