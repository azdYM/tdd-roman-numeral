// Write your test here

import { RomanNumeral } from './RomanNumeral.js'

test.each([
    [1, 'I'],
    [2, 'II'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [9, 'IX'],
    [10, 'X'],
])('converts %d to %s', (input, expected) => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(input)).toBe(expected)
})