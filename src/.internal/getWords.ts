/**
 * @private
 * @param str
 * @param stringCase
 * @returns
 */
function getWords(str: string, stringCase: string = 'normal'): string[] {
    const splitted: string[] = []
    switch (stringCase) {
        case 'camel': {
            const regExpArr = str.match(/^([a-z]+)([a-zA-Z]*)$/)
            regExpArr !== null ? splitted.push(regExpArr[1]) : splitted.push('')
        }
        case 'pascal': {
            const restOfWord = str.split(/[A-Z]/)
            restOfWord.shift()
            const capLetters = str.match(/[A-Z]/g)
            for (let i = 0; i < restOfWord.length && capLetters !== null; i++)
                splitted.push(capLetters[i] + restOfWord[i])
            break
        }
        case 'kebab': {
            splitted.push(...str.split('-'))
            break
        }
        case 'snake': {
            splitted.push(...str.split('-'))
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
