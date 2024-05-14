import { regionMatch, looseRegionMatch, type StringRegion } from '../src/regionMatchers'

describe('regionMatch()', () => {
    test('should match identical strings', () => {
        expect(regionMatch('hello', 'hello')).toBe(true)
    })

    test('should match identical regions in strings', () => {
        const str1: StringRegion = { str: 'hello world', start: 0, end: 5 }
        const str2: StringRegion = { str: 'hello there', start: 0, end: 5 }
        expect(regionMatch(str1, str2)).toBe(true)
    })

    test('should not match regions', () => {
        const str1: StringRegion = { str: 'hello world', start: 6, end: 11 }
        const str2: StringRegion = { str: 'hello there', start: 6, end: 11 }
        expect(regionMatch(str1, str2)).toBe(false)
    })

    test('should match regions with different ending points', () => {
        const str1: StringRegion = { str: ' hello world', start: 1, end: 6 }
        const str2: StringRegion = { str: 'hello there', start: 0, end: 5 }
        expect(regionMatch(str1, str2)).toBe(true)
    })

    test('should handle missing end indices', () => {
        const str1: StringRegion = { str: 'hello world', start: 5 }
        const str2: StringRegion = { str: 'world world', start: 5 }
        expect(regionMatch(str1, str2)).toBe(true)
    })

    test('should handle missing start indices', () => {
        const str1: StringRegion = { str: 'hello world', end: 5 }
        const str2: StringRegion = { str: 'hello hello', end: 5 }
        expect(regionMatch(str1, str2)).toBe(true)
    })

    test('should handle start & end inputs directly', () => {
        expect(regionMatch('hello', 'hello', 1, 4)).toBe(true)
        expect(regionMatch('hello', 'world', undefined, 2)).toBe(false)
    })

    test('should handle empty strings', () => {
        expect(regionMatch('', '')).toBe(true)
        expect(regionMatch('', 'hello')).toBe(false)
    })
})

describe('looseRegionMatch()', () => {
    test('should match identical strings with different cases', () => {
        expect(looseRegionMatch('Hello', 'heLLo')).toBe(true)
    })

    test('should match identical regions with different cases', () => {
        const str1: StringRegion = { str: 'hellO world', start: 0, end: 5 }
        const str2: StringRegion = { str: 'Hello there', start: 0, end: 5 }
        expect(looseRegionMatch(str1, str2)).toBe(true)
    })

    test('should not match regions', () => {
        const str1: StringRegion = { str: 'hello worlD', start: 6, end: 11 }
        const str2: StringRegion = { str: 'hello thERE', start: 6, end: 11 }
        expect(looseRegionMatch(str1, str2)).toBe(false)
    })

    test('should handle empty strings', () => {
        expect(looseRegionMatch('', '')).toBe(true)
        expect(looseRegionMatch('', 'heLLo')).toBe(false)
    })
})
