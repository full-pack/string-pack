import { padStart, padEnd, padBidirectional, PaddingBias, type PaddingOptions } from './padding'
import { compare, looseCompare } from './compare'
import { merge } from './merge'
import {
    capitalizeInitial,
    capitalizeWords,
    isSnakeCase,
    isKebabCase,
    isCamelCase,
    isPascalCase,
    snakeCase,
    kebabCase,
    camelCase,
    pascalCase
} from './case'
import { regionMatch, looseRegionMatch, type StringRegion } from './regionMatchers'
import { isAlpha, isAlphaNumeric } from './validators'
import { reverse } from './reverse'

export {
    padStart,
    padEnd,
    padBidirectional,
    compare,
    looseCompare,
    merge,
    capitalizeInitial,
    capitalizeWords,
    isSnakeCase,
    isKebabCase,
    isCamelCase,
    isPascalCase,
    snakeCase,
    kebabCase,
    camelCase,
    pascalCase,
    regionMatch,
    looseRegionMatch,
    isAlpha,
    isAlphaNumeric,
    reverse,
    PaddingBias
}

export type { StringRegion, PaddingOptions }
