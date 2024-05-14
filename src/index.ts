import { padStart, padEnd, padBidirectional } from './padding'
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
    looseRegionMatch
}

export type { StringRegion }
