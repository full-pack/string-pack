import { capitalizeWords, capitalizeInitial } from '../src/case'

describe('capitalizeInitial Function', () => {
    test('should capitalize the first letter of a word', () => {
        expect(capitalizeInitial('hello world')).toBe('Hello world')
    })

    test('should capitalize the first letter when non-alphabet characters are preceding', () => {
        expect(capitalizeInitial(':> hello')).toBe(':> Hello')
    })

    test('should handle empty string', () => {
        expect(capitalizeInitial('')).toBe('')
    })
})

describe('capitalizeWords Function', () => {
    test('should capitalize the first letter of each word', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World')
        expect(capitalizeWords('test case example')).toBe('Test Case Example')
    })

    test('should capitalize the first letter of each word when non-alphabets exist', () => {
        expect(capitalizeWords('Sphinx of black quartz:-judge my vow')).toBe('Sphinx Of Black Quartz:-Judge My Vow')
    })

    test('should handle empty string', () => {
        expect(capitalizeWords('')).toBe('')
    })
})
