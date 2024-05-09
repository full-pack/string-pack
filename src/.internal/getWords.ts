/**
 * @private
 * Splits a string into words based on the specified string case.
 * @param {string} str - The input string to split into words.
 * @param {string} stringCase - The string case to use for splitting the words. Defaults to 'normal'.
 *                              Possible values: 'normal', 'camel', 'pascal'.
 * @returns {string[]} An array of words extracted from the input string based on the specified string case.
 */
function getWords(str: string, stringCase: string = 'normal'): string[] {
    const splitted: string[] = []
    switch (stringCase) {
        case 'camel': {
            const regExpArr = str.match(/^([a-z]+)([a-zA-Z]*)$/)
            if (regExpArr !== null) splitted.push(regExpArr[1])
        }
        case 'pascal': {
            const restOfWord = str.split(/[A-Z]/)
            restOfWord.shift()
            const capLetters = str.match(/[A-Z]/g)
            for (let i = 0; i < restOfWord.length && capLetters !== null; i++)
                splitted.push(capLetters[i] + restOfWord[i])
            break
        }
        default: {
            // replacing non-alphanumeric characters
            str = str.replace(/[\W_]/g, ' ')
            // replacing multiple spaces with one
            str = str.replace(/\s{2,}|\t{1,}/g, ' ')
            str = str.trim()
            splitted.push(...str.split(' '))
        }
    }
    return splitted
}

export { getWords }
