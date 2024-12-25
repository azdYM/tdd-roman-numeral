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

test('test if 10 print X', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(10)).toBe('X')
})

test('test if 11 print XI', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(11)).toBe('XI')
})

test('test if 39 print XXXIX', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(39)).toBe('XXXIX')
})

test('test if 40 print XL', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(40)).toBe('XL')
    expect(romanNumeral.of(41)).toBe('XLI')

})

test('test if 50 print L', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(50)).toBe('L')
})

test('test if 60 print LX', () => {
    const romanNumeral = new RomanNumeral()
    expect(romanNumeral.of(60)).toBe('LX')
})