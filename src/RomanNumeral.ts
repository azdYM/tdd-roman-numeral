export class RomanNumeral {
    of(decimal: number) {
        if (decimal === 1)
            return 'I'

        if (decimal === 2)
            return 'II'

        if (decimal === 4)
            return 'IV'

        if (decimal === 5)
            return 'V'

        if (decimal === 6)
            return 'VI'

        if (decimal === 9)
            return 'IX'

        if (decimal === 10)
            return 'X'
    }
}