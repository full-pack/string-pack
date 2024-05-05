import {
    capitalizeWords,
    capitalizeInitial,
    isSnakeCase,
    isKebabCase,
    isCamelCase,
    isPascalCase,
    snakeCase,
    kebabCase,
    camelCase,
    pascalCase
} from '../src/case'

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

describe('isSnakeCase Function', () => {
    test('should return true for valid snake case strings', () => {
        expect(isSnakeCase('hello_world')).toBe(true)
        expect(isSnakeCase('test_case_example')).toBe(true)
    })

    test('should return false for invalid snake case strings', () => {
        expect(isSnakeCase('NotSnakeCase')).toBe(false)
        expect(isSnakeCase('snake_case_with_')).toBe(false) // Missing character after underscore
        expect(isSnakeCase('123_snake_case')).toBe(false) // Number at the beginning
    })

    test('should return true for alphanumeric snake case strings', () => {
        expect(isSnakeCase('hell0_w0rld', true)).toBe(true)
        expect(isSnakeCase('test_ca8e_example', true)).toBe(true)
    })

    test('should return false for non-alphanumeric snake case strings', () => {
        expect(isSnakeCase('sn@ke_ca8e_with_special_characters', true)).toBe(false)
    })
})

describe('isKebabCase Function', () => {
    test('should return true for valid snake case strings', () => {
        expect(isKebabCase('hello-world')).toBe(true)
        expect(isKebabCase('test-case-example')).toBe(true)
    })

    test('should return false for invalid snake case strings', () => {
        expect(isKebabCase('NotKebabCase')).toBe(false)
        expect(isKebabCase('kebab-case-with-')).toBe(false) // Missing character after hyphen
        expect(isKebabCase('123-kebab-case')).toBe(false) // Number at the beginning
    })

    test('should return true for alphanumeric snake case strings', () => {
        expect(isKebabCase('hell0-w0rld', true)).toBe(true)
        expect(isKebabCase('test-ca8e-example', true)).toBe(true)
    })

    test('should return false for non-alphanumeric snake case strings', () => {
        expect(isKebabCase('keb@b-ca8e-with-special-characters', true)).toBe(false)
    })
})

describe('isCamelCase Function', () => {
    test('should return true for camelCase strings', () => {
        expect(isCamelCase('myVariableName')).toBe(true)
        expect(isCamelCase('helloWorld')).toBe(true)
    })

    test('should return false for non-camelCase strings', () => {
        expect(isCamelCase('MyVariableName')).toBe(false) // PascalCase
        expect(isCamelCase('not_Camel_Case')).toBe(false) // snake_case
        expect(isCamelCase('camelCase123')).toBe(false) // Numbers
        expect(isCamelCase('cCase123')).toBe(false) // only first letter small
        expect(isCamelCase('CAMEL')).toBe(false) // ALL CAPS
    })

    test('should handle empty string', () => {
        expect(isCamelCase('')).toBe(false)
    })
})

describe('isPascalCase Function', () => {
    test('should return true for PascalCase strings', () => {
        expect(isPascalCase('MyVariableName')).toBe(true)
        expect(isPascalCase('Pascal')).toBe(true)
    })

    test('should return false for non-PascalCase strings', () => {
        expect(isPascalCase('myVariableName')).toBe(false) // camelCase
        expect(isPascalCase('Not-Pascal-Case')).toBe(false) // kebab-case
        expect(isPascalCase('PascalCase123')).toBe(false) // Number
        expect(isPascalCase('PASCAL')).toBe(false) // ALL CAPS
    })

    test('should handle empty string', () => {
        expect(isPascalCase('')).toBe(false)
    })
})

describe('snakeCase Function', () => {
    test('should convert a string to snake case', () => {
        expect(snakeCase('hello WorLd')).toBe('hello_world')
        expect(snakeCase('test Case Example')).toBe('test_case_example')
        expect(snakeCase('snake Case With Numbers 123')).toBe('snake_case_with_numbers_123')
    })

    test('should handle empty string', () => {
        expect(snakeCase('')).toBe('')
    })

    test('should handle conversion', () => {
        expect(snakeCase('from_snake_case')).toBe('from_snake_case')
        expect(snakeCase('from-kebab-case')).toBe('from_kebab_case')
        expect(snakeCase('from-kebab-case-with-n123')).toBe('from_kebab_case_with_n123')
        expect(snakeCase('FromPascalCase')).toBe('from_pascal_case')
        expect(snakeCase('fromCamelCase')).toBe('from_camel_case')
    })

    test('should handle snake case with numbersInWords option is present', () => {
        expect(snakeCase('snake Case With Numbers123', true)).toBe('snake_case_with_numbers_one_two_three')
        expect(snakeCase('snake Case 123 With Numbers', true)).toBe('snake_case_one_two_three_with_numbers')
        expect(snakeCase('1snake Case2With Numbers3', true)).toBe('one_snake_case_two_with_numbers_three')
    })
})

describe('kebabCase Function', () => {
    test('should convert a string to kebab case', () => {
        expect(kebabCase('h3llo WoRld')).toBe('h3llo-world')
        expect(kebabCase('test Case Example')).toBe('test-case-example')
        expect(kebabCase('kebab Case With Numbers123')).toBe('kebab-case-with-numbers123')
    })

    test('should handle empty string', () => {
        expect(kebabCase('')).toBe('')
    })
    test('should handle conversion', () => {
        expect(kebabCase('from-kebab-case')).toBe('from-kebab-case')
        expect(kebabCase('from_snake_case')).toBe('from-snake-case')
        expect(kebabCase('from_snake_case_with_n123')).toBe('from-snake-case-with-n123')
        expect(kebabCase('FromPascalCase')).toBe('from-pascal-case')
        expect(kebabCase('fromCamelCase')).toBe('from-camel-case')
    })

    test('should handle kebab case with numbersInWords option is present', () => {
        expect(kebabCase('kebab Case With Numbers123', true)).toBe('kebab-case-with-numbers-one-two-three')
        expect(kebabCase('kebab Case 123 With Numbers', true)).toBe('kebab-case-one-two-three-with-numbers')
        expect(kebabCase('1kebab Case2With Numbers3', true)).toBe('one-kebab-case-two-with-numbers-three')
    })
})

describe('camelCase Function', () => {
    test('should convert a string to camel case', () => {
        expect(camelCase('hello WoRld')).toBe('helloWorld')
        expect(camelCase('Test CaSe ExamplE')).toBe('testCaseExample')
        expect(camelCase('camel Case With Numbers123')).toBe('camelCaseWithNumbers')
    })

    test('should handle empty string', () => {
        expect(camelCase('')).toBe('')
    })
    test('should handle conversion', () => {
        expect(camelCase('fromCamelCase')).toBe('fromCamelCase')
        expect(camelCase('from_snake_case')).toBe('fromSnakeCase')
        expect(camelCase('from_snake_case_with_n123')).toBe('fromSnakeCaseWithN')
        expect(camelCase('from-kebab-case')).toBe('fromKebabCase')
        expect(camelCase('from-kebab-case-with-numbers123')).toBe('fromKebabCaseWithNumbers')
        expect(camelCase('FromPascalCase')).toBe('fromPascalCase')
    })
})

describe('pascalCase Function', () => {
    test('should convert a string to pascal case', () => {
        expect(pascalCase('hello WoRld')).toBe('HelloWorld')
        expect(pascalCase('Test CaSe@ExamplE')).toBe('TestCaseExample')
        expect(pascalCase('pasCal Case With Numbers123')).toBe('PascalCaseWithNumbers')
    })

    test('should handle empty string', () => {
        expect(pascalCase('')).toBe('')
    })
    test('should handle conversion', () => {
        expect(pascalCase('FromPascalCase')).toBe('FromPascalCase')
        expect(pascalCase('from_snake_case')).toBe('FromSnakeCase')
        expect(pascalCase('from_snake_case_with_n123')).toBe('FromSnakeCaseWithN')
        expect(pascalCase('from-kebab-case')).toBe('FromKebabCase')
        expect(pascalCase('from-kebab-case-with-numbers123')).toBe('FromKebabCaseWithNumbers')
        expect(pascalCase('fromCamelCase')).toBe('FromCamelCase')
    })
})
