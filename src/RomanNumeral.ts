const romanMap = [
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
]

export class RomanNumeral {
    of(decimal: number) {
        let result = ''
        for(const [value, roman] of romanMap) {
            while(decimal >= Number(value)) {
                result += roman
                decimal -= Number(value)
            }
        }

        return result
    }
}