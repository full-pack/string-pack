# @full-pack/string-pack

[![npm](https://img.shields.io/npm/v/@full-pack/string-pack.svg)](https://www.npmjs.com/package/@full-pack/string-pack)

[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/jestjs/jest) [![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![codecov](https://codecov.io/gh/full-pack/string-pack/graph/badge.svg?token=VAO8UI9TEP)](https://codecov.io/gh/full-pack/string-pack)

A lightweight and versatile String Utility Package for Node.js & Browser.

<img src="https://user-images.githubusercontent.com/6517308/121813242-859a9700-cc6b-11eb-99c0-49e5bb63005b.jpg">

# Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [API](#api)
  * [padding](#padding)
    * [padStart](#padStart)
    * [padEnd](#padend)
    * [padBidirectional](#padbidirectional)
  * [merge](#merge)
  * [compare](#compare)
  * [looseCompare](#loosecompare)
  * [capitalizeInitial](#capitalizeinitial)
  * [capitalizeWords](#capitalizewords)
  * [Case Conversion](#case-conversion)
    * [snakeCase](#snakeCase)
    * [kebabCase](#kebabCase)
    * [camelCase](#camelCase)
    * [pascalCase](#pascalCase)
  * [Case Validation](#case-validation)
    * [isSnakeCase](#isSnakeCase)
    * [isKebabCase](#isKebabCase)
    * [isCamelCase](#isCamelCase)
    * [isPascalCase](#isPascalCase)
  * [regionMatch](#regionmatch)
  * [looseRegionMatch](#looseregionmatch)
  * [isAlpha](#isalpha)
  * [isAlphaNumeric](#isalphanumeric)

  (Coming Soon)
  * [reverse](#)
  * [CustomValidator](#)
 * [Build](#build)
 * [License](#license)

## install
```sh
npm install @full-pack/string-pack
```

### require

```js
const { ... } = require('@full-pack/string-pack');
```

### import

```js
import { ... } from '@full-pack/string-pack';
```

## API

### padding
Adds padding to given string.

##### padStart
Pads the start of a string with a specified fill string a certain number of times.
```js
// Basic Usage
padStart('hello', 'abc', 3) // abcabcabchello

// Limiting total length
padStart('hello', 'abc', 3, 8) // abchello
```

##### padEnd
Pads the end of a string with a specified fill string a certain number of times.
```js
// Basic Usage
padEnd('hello', 'abc', 3); // helloabcabcabc

// Limiting total length
padEnd('hello', 'abc', 3, 8); // helloabc
```

##### padBidirectional
Pads a string with a specified fill string a certain number of times on both ends.
```js
// Basic usage
padBidirectional('hello', '*', 2); // '**hello**'

// Limiting total length
padBidirectional('world', '-', 3, 10); // '--world---'
 
// Controlling padding distribution
padBidirectional('example', '*', 2, 10, 0); // '**example*'
```

### merge
Merges an array of strings into a single string using a specified separator.
```js
merge('-', 'apple', 'orange', 'banana'); // 'apple-orange-banana'

merge(true, 'apple', 'orange'); // 'apple orange'
 
merge(false, 'apple', 'orange', 'banana'); // 'appleorangebanana'
```

### compare
Performs a strict comparison between two strings.
```js
compare("hello", "hello"); // true

compare("abc", "ABC"); // false
```

### looseCompare
Performs a case-insensitive loose comparison between two strings.
```js
looseCompare("hello", "HELLO"); // true

looseCompare('abc', '123'); // false
```

### capitalizeInitial
Capitalizes the first letter of a word in a string.
```js
capitalizeInitial('hello'); // 'Hello'

capitalizeInitial(':> hello');  // ':> Hello'
```

### capitalizeWords
Capitalizes the first letter of each word in a given string.
```js
capitalizeWords('hello world'); // 'Hello World'

capitalizeWords('Sphinx of black quartz:-judge my vow'); // 'Sphinx Of Black Quartz:-Judge My Vow'
```

### Case Conversion

#### snakeCase
Converts a string to snake_case format.
```js
snakeCase('hello WorLd'); // 'hello_world'
snakeCase('from-kebab-case'); // 'from_kebab_case'
snakeCase('snake Case With Numbers123', true); // 'snake_case_with_numbers_one_two_three'
```

#### kebabCase
Converts a string to kebab-case format.
```js
kebabCase('h3llo WoRld'); // 'h3llo-world'
kebabCase('from_snake_case'); // 'from-snake-case'
kebabCase('kebab Case With Numbers123', true); // 'kebab-case-with-numbers-one-two-three'
```

#### camelCase
Converts a string to camelCase format.
```js
camelCase('hello WoRld'); // 'helloWorld'
camelCase('Test CaSe ExamplE'); // 'testCaseExample'
camelCase('camel Case With Numbers123'); // 'camelCaseWithNumbers'
```

#### pascalCase
Converts a string to PascalCase format.
```js
pascalCase('hello WoRld'); // 'HelloWorld'
pascalCase('Test CaSe ExamplE'); // 'TestCaseExample'
pascalCase('pasCal Case With Numbers123'); // 'PascalCaseWithNumbers'
```

### Case Validation

#### isSnakeCase
Checks if a string is in snake_case format.
```js
// Valid
isSnakeCase('snake_case_example'); // true
isSnakeCase('hello_world'); // true
 
// Valid with alphanumeric flag
isSnakeCase('with_1234', true); // true
isSnakeCase('pi_3_14', true); // true
 
// Invalid
isSnakeCase('123at_start'); // false
isSnakeCase(' no_space_allowed'); // false
isSnakeCase('no_CAPS'); // false
```

#### isKebabCase
Checks if a string is in kebab-case format.
```js
// Valid
isKebabCase('kebab-case-example'); // true
isKebabCase('hello-world'); // true
 
// Valid with alphanumeric flag
isKebabCase('with-1234', true); // true
isKebabCase('pi-3-14', true); // true
 
// Invalid
isKebabCase('123at-start'); // false
isKebabCase(' no-space-allowed'); // false
isKebabCase('no-CAPS'); // false
```

#### isCamelCase
Checks if a string is in camelCase format.
```js
// Valid
isCamelCase('camelCaseExample'); // true
isCamelCase('helloWorld'); // true
 
// Invalid
isCamelCase('CAMEL'); // false
isCamelCase(' noSpaceAllowed'); // false
isCamelCase('withThe1234'); // false
```

#### isPascalCase
Checks if a string is in PascalCase format.
```js
// Valid
isPascalCase('PascalCaseExample'); // true
isPascalCase('HelloWorld'); // true
 
// Invalid
isPascalCase('PASCAL'); // false
isPascalCase(' NoSpaceAllowed');; // false
isPascalCase('WithThe1234'); // false
```

### regionMatch
Compares two strings or regions for equality.
```js
// Matching identical strings
regionMatch('hello', 'hello'); // true

// Matching identical regions in strings
const str1 = { str: 'hello world', start: 0, end: 5 };
const str2 = { str: 'hello there', start: 0, end: 5 };
regionMatch(str1, str2); // true
// OR
regionMatch('hello world', 'hello there', 0, 5) // true

// Not matching regions
regionMatch('hello world', 'hello there', 6, 11); // false
```

### looseRegionMatch
Performs a loose comparison of two strings or regions for equality.
```js
// Loose matching identical strings
looseRegionMatch('hello', 'HeLLo'); // true

// Loose matching identical regions in strings
const str1 = { str: ' hellO world', start: 1, end: 6 };
const str2 = { str: 'HelLo there', start: 0, end: 5 };
looseRegionMatch(str1, str2); // true
```

### isAlpha
Checks if a string contains only alphabetic characters (A-Z, a-z).
```js
isAlpha("HelloWorld"); // true
isAlpha("Hello123"); // false
```

### isAlphaNumeric
Checks if a string contains only alphanumeric characters (A-Z, a-z, 0-9).
```js
isAlphaNumeric("Hello01"); // true
isAlphaNumeric("1234567890"); // false
```

## Build
```
npm run build
```

## License
The MIT License. Full License is [here](LICENSE)
