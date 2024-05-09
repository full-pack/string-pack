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
    for (let i = 0, val = ''; i < strings.length; i++) {
        if (strings.length - 1 === i) return val + strings[i]
        else if (typeof sep === 'boolean') val += sep ? strings[i] + ' ' : strings[i]
        else val += strings[i] + sep
    }
    return typeof sep === 'boolean' ? (sep ? ' ' : '') : sep
}

export { merge }
