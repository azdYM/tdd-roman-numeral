// Write your test here

import { RomanNumeral } from "./RomanNumeral.js"

test('test if 1 print I', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(1)).toBe('I')
})

test('test if 2 print II', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(2)).toBe('II')
})

test('test if 4 print IV', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(4)).toBe('IV')
})

test('test if 5 print V', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(5)).toBe('V')
})

test('test if 6 print VI', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(6)).toBe('VI')
})

test('test if 9 print IX', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(9)).toBe('IX')
})

test('test if 11 print XI', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(11)).toBe('XI')
})

test('test if 39 print XXXIX', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(39)).toBe('XXXIX')
})

test('test if 41 print XLI', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(41)).toBe('XLI')

})

test('test if 51 print LI', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(51)).toBe('LI')
})

test('test if 61 print LXI', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(61)).toBe('LXI')
})

test('test if 89 print LXXXIX', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(89)).toBe('LXXXIX')
})

test('test if 91 print XCI', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(91)).toBe('XCI')
})

test('test if 101 print CI', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(101)).toBe('CI')
})

test('test if 111 print CXI', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(111)).toBe('CXI')
})

test('test if 151 print CLI', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(151)).toBe('CLI')
})

test('test if 301 print CCCI', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(301)).toBe('CCCI')
})

test('test if 321 print CCCXXI', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(321)).toBe('CCCXXI')
})

test('test if 351 print CCCLI', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(351)).toBe('CCCLI')
})

test('test if 389 print CCCLXXXIX', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(389)).toBe('CCCLXXXIX')
})

test('test if 401 print CD', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(401)).toBe('CDI')
})

test('test if 558 print DLVIII', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(558)).toBe('DLVIII')
})

test('test if 899 print DCCCXCIX', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(899)).toBe('DCCCXCIX')
})