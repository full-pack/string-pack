import { compare, looseCompare } from '../src/compare'

describe('compare Function', () => {
    test('Should return true for equal strings', () => {
        expect(compare('hello', 'hello')).toBe(true)
    })

    test('Should return false for different strings', () => {
        expect(compare('abc', 'ABC')).toBe(false)
    })

    test('Should handle empty strings', () => {
        expect(compare('', '')).toBe(true)
    })
})

describe('looseCompare Function', () => {
    test('Should return true for equal strings (case-insensitive)', () => {
        expect(looseCompare('hello', 'HELLO')).toBe(true)
    })

    test('Should return false for different strings', () => {
        expect(looseCompare('abc', '123')).toBe(false)
    })

    test('Should handle empty strings', () => {
        expect(looseCompare('', '')).toBe(true)
    })
})
