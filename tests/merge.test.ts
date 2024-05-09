import { merge } from '../src/merge'

describe('merge Function', () => {
    test('Should merge strings with default separator (comma)', () => {
        expect(merge(',', 'apple', 'orange', 'banana')).toBe('apple,orange,banana')
    })

    test('Should merge strings with a custom separator (colon)', () => {
        expect(merge(':', 'red', 'green', 'blue')).toBe('red:green:blue')
    })

    test('Should merge strings with a space when boolean (true) as separator ', () => {
        expect(merge(true, 'one', 'two', 'three')).toBe('one two three')
    })

    test('Should handle an empty string as separator', () => {
        expect(merge('', 'hello', 'world')).toBe('helloworld')
    })

    test('Should handle empty strings in the input', () => {
        expect(merge('-', '', 'second', '')).toBe('-second-')
    })

    test('Should handle a boolean separator (false) by no/empty separator', () => {
        expect(merge(false, 'a', 'b', 'c')).toBe('abc')
    })

    test('Should return empty string for no input sep=false', () => {
        expect(merge(false)).toBe('')
    })

    test('Should return string with whitespace for no input ', () => {
        expect(merge(true)).toBe(' ')
    })

    test('Should return seperator string for no input ', () => {
        expect(merge('-x-')).toBe('-x-')
    })

    test('Should handle array of string in the input', () => {
        const arr = ['first', 'second', 'third']
        expect(merge('-', arr)).toBe('first-second-third')
    })
})
