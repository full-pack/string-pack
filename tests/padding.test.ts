import { padEnd, padStart, padBidirectional, PaddingBias } from '../src/padding'

describe('padStart function', () => {
    describe('Should pad the start of the string with the fill string repeated the specified number of times', () => {
        test('Basic padding', () => {
            const result = padStart('hello', 'abc', 3)
            expect(result).toBe('abcabcabchello')
        })
        test('Using default fill string and repeat count', () => {
            const result = padStart('world', undefined, undefined, 10)
            expect(result).toBe(' world')
            expect(result).toHaveLength(6)
        })

        test('No padding needed (maxLen is less than or equal to the original string length)', () => {
            const result = padStart('test', '123', 2, 4)
            expect(result).toBe('test')
            expect(result).toHaveLength(4)
        })
        test('Underflow padding', () => {
            const result = padStart('abc', '*', 1, 10)
            expect(result).toBe('*abc')
            expect(result).toHaveLength(4)
        })
        test('Overflow padding', () => {
            const result = padStart('overflow', 'xyz', 5, 15)
            expect(result).toBe('zxyzxyzoverflow')
            expect(result).toHaveLength(15)
        })
        test('Edge case - empty string with default fill string and repeat count', () => {
            const result = padStart('', '---', 2)
            expect(result).toBe('------')
        })
    })

    describe('Should handle edge cases and undefined maxLen', () => {
        test('Edge case - empty string with no parameters', () => {
            const result = padStart('')
            expect(result).toBe(' ')
        })
        test('Edge case - undefined fill string and repeat count', () => {
            const result = padStart('test')
            expect(result).toBe(' test')
        })
        test('Edge case - undefined maxLen', () => {
            const result = padStart('example', '*', 3)
            expect(result).toBe('***example')
        })
    })
})

describe('padEnd function', () => {
    describe('Should pad the end of the string with the fill string repeated the specified number of times', () => {
        test('Basic padding', () => {
            const result = padEnd('hello', 'abc', 3)
            expect(result).toBe('helloabcabcabc')
        })
        test('Using default fill string and repeat count', () => {
            const result = padEnd('world', undefined, undefined, 10)
            expect(result).toBe('world ')
            expect(result).toHaveLength(6)
        })
        test('No padding needed (maxLen is less than or equal to the original string length)', () => {
            const result = padEnd('test', '123', 2, 4)
            expect(result).toBe('test')
            expect(result).toHaveLength(4)
        })
        test('Underflow padding', () => {
            const result = padEnd('abc', '*', 1, 10)
            expect(result).toBe('abc*')
            expect(result).toHaveLength(4)
        })
        test('Overflow padding', () => {
            const result = padEnd('overflow', 'xyz', 5, 15)
            expect(result).toBe('overflowxyzxyzx')
            expect(result).toHaveLength(15)
        })
        test('Edge case - empty string with default fill string and repeat count', () => {
            const result = padEnd('', '---', 2)
            expect(result).toBe('------')
        })
    })

    describe('Should handle edge cases and undefined maxLen', () => {
        test('Edge case - empty string with no parameters', () => {
            const result = padEnd('')
            expect(result).toBe(' ')
        })
        test('Edge case - undefined fill string and repeat count', () => {
            const result = padEnd('test')
            expect(result).toBe('test ')
        })
        test('Edge case - undefined maxLen', () => {
            const result = padEnd('example', '*', 3)
            expect(result).toBe('example***')
        })
    })
})
describe('padBidirectional function', () => {
    test('Should pad with default fill string and repeat count', () => {
        expect(padBidirectional('hello')).toBe(' hello ')
    })

    test('Should pad with custom fill string and repeat count', () => {
        expect(padBidirectional('world', '*', { repeatCount: 3 })).toBe('***world***')
    })

    test('Should limit total length with bias', () => {
        expect(padBidirectional('example', '*', { repeatCount: 2, maxLen: 10, bias: PaddingBias.START })).toBe(
            '**example*'
        )
        expect(padBidirectional('example', '*', { repeatCount: 2, maxLen: 10, bias: PaddingBias.END })).toBe(
            '*example**'
        )
    })

    test('Should handle empty string input', () => {
        expect(padBidirectional('')).toBe('  ')
        expect(padBidirectional('', '-', { repeatCount: 3 })).toBe('------')
    })

    test('Should evenly pad for even maxLen', () => {
        expect(padBidirectional('test', '-', { repeatCount: 2, maxLen: 10 })).toBe('--test--')
    })

    test('Should return input string if maxlen is less than traget string length', () => {
        expect(padBidirectional('test', '-', { repeatCount: 1, maxLen: 4 })).toBe('test')
    })

    test('Should ignore bias', () => {
        expect(padBidirectional('test', '*', { repeatCount: 3, maxLen: 10, bias: PaddingBias.START })).toBe(
            '***test***'
        )
        expect(padBidirectional('test', '*', { repeatCount: 3, maxLen: 10, bias: PaddingBias.END })).toBe('***test***')
    })
    test('Should properly pad at start & end in case of maxlen limit', () => {
        expect(padBidirectional('test', 'abc', { repeatCount: 3, maxLen: 11, bias: PaddingBias.START })).toBe(
            'cabctestabc'
        )
        expect(padBidirectional('test', 'abc', { repeatCount: 3, maxLen: 12, bias: PaddingBias.START })).toBe(
            'cabctestabca'
        )
    })
})
