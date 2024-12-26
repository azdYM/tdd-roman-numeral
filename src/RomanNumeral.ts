import { RangeChecker } from "./RangeChecker.js"
import { RomanNumeralMapper } from "./RomanNumeralMapper.js"

export class RomanNumeral {

    private checker: RangeChecker
    private mapperRomanNumeral: RomanNumeralMapper

    constructor() {
        this.checker = new RangeChecker()
        this.mapperRomanNumeral = new RomanNumeralMapper(
            this.mapNumberToRomanNumeral.bind(this)
        )
    }

    of(number: number) {
        return this.mapNumberToRomanNumeral(number)
    }

    private mapNumberToRomanNumeral(number: number) {
        if (this.checker.forRangeOneToThirtyNine(number)) 
            return this.oneToThirtyNine(number)

        if (this.checker.forRangeFortyToEightyNine(number)) 
            return this.mapperRomanNumeral.fortyToEightyNine(number)

        if (this.checker.forRangeNinetyToThreeHundredEighty(number))
            return this.mapperRomanNumeral.ninetyToThreeHundredEighty(number)

        if (this.checker.forRangeFourHundredToEightHundredNinetyNine(number)) 
            return this.mapperRomanNumeral.fourHundredToEightHundredNinetyNine(number)

        if (this.checker.forNumberGreaterThanOneThousand(number))
            return this.mapperRomanNumeral.numberGreaterThanOneThousand(number)

        return ''
    } 

    private oneToThirtyNine(number: number) {
        if (this.checker.forRangeOneToThree(number)) 
            return this.mapperRomanNumeral.oneToThree(number)

        if (this.checker.forRangeFourToEight(number))
            return this.mapperRomanNumeral.fourToEight(number)
        
        if (this.checker.forRangeNineToThirtyNine(number)) 
            return this.mapperRomanNumeral.nineToThirtyNine(number)

        return ''
    }
}