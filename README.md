# @full-pack/string-pack

[![npm](https://img.shields.io/npm/v/@full-pack/string-pack.svg)](https://www.npmjs.com/package/@full-pack/string-pack)

[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/jestjs/jest) [![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) 

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
  
  (Coming Soon)
  * [compare](#)
  * [losseCompare](#)
  * [merge](#)
  * [remove](#)
  * [looseRemove](#)
  * [caseCoversion](#)
  * And Much More.
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

## Build
```
npm run build
```

## License
The MIT License. Full License is [here](LICENSE)
