import { isAlpha, isAlphaNumeric } from '../src/validators'

describe('isAlpha', () => {
    test('should return true for strings with only alphabetic characters', () => {
        expect(isAlpha('HelloWorld')).toBe(true)
        expect(isAlpha('abcdefghijklmnopqrstuvwxyz')).toBe(true)
        expect(isAlpha('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe(true)
    })

    test('should return false for strings with non-alphabetic characters', () => {
        expect(isAlpha('Hello123')).toBe(false)
        expect(isAlpha('Hello World')).toBe(false)
        expect(isAlpha('!@#$%^&*()')).toBe(false)
    })

    test('should return false for empty string', () => {
        expect(isAlpha('')).toBe(false)
    })
})

describe('isAlphaNumeric', () => {
    test('should return true for strings with only alphanumeric characters', () => {
        expect(isAlphaNumeric('Hello123')).toBe(true)
        expect(isAlphaNumeric('123abc')).toBe(true)
        expect(isAlphaNumeric('1A2B3C4')).toBe(true)
    })

    test('should return false for strings with characters outside A-Z, a-z, 0-1', () => {
        expect(isAlphaNumeric('Hello World')).toBe(false)
        expect(isAlphaNumeric('!@#$%^&*()')).toBe(false)
    })

    test('should return false for empty string', () => {
        expect(isAlphaNumeric('')).toBe(false)
    })
})
