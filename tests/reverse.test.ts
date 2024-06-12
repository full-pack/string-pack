import { reverse } from '../src/reverse'

describe('toReverse Function', () => {
    test('Should reverse the string', () => {
        expect(reverse('abc')).toBe('cba')
    })

    test('Should handle empty string', () => {
        expect(reverse('')).toBe('')
    })
})
