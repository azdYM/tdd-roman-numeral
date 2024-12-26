import { RangeChecker } from "./RangeChecker.js"
import { RomanNumeralMapper } from "./RomanNumeralMapper.js"

export class RomanNumeral {

    private checker: RangeChecker
    private mapper: RomanNumeralMapper

    constructor() {
        this.checker = new RangeChecker()
        this.mapper = new RomanNumeralMapper()
    }

    of(number: number) {
        return this.mapNumberToRomanNumeral(number)
    }

    private mapNumberToRomanNumeral(number: number) {
        if (this.checker.forRangeOneToThirtyNine(number)) 
            return this.oneToThirtyNineForRomanNumeral(number)

        if (this.checker.forRangeFortyToEightyNine(number)) 
            return this.fortyToEightyNineForRomanNumeral(number)

        if (this.checker.forRangeNinetyToThreeHundredEighty(number))
            return this.ninetyToThreeHundredEightyForRomanNumeral(number)

        if (this.checker.forRangeFourHundredToEightHundredninetyNine(number)) 
            return this.fourHundredToEightHundredNinetyNineForRomanNumeral(number)
        
        return ''
    } 

    private oneToThirtyNineForRomanNumeral(number: number) {
        if (this.checker.forRangeOneToThree(number)) 
            return this.oneToThreeForRomanNumeral(number)

        if (this.checker.forRangeFourToEight(number))
            return this.fourToEightForRomanNumeral(number)
        
        if (this.checker.forRangeNineToThirtyNine(number)) 
            return this.nineToThirtyNineForRomanNumeral(number)

        return ''
    }

    private oneToThreeForRomanNumeral(number: number) {
        let romanNumeral = ""
        for(let i = 1; i <= number; i++) {
            romanNumeral += this.mapper.oneToRomanNumeral()
        }
        
        return romanNumeral
    }

    private fourToEightForRomanNumeral(number: number) {
        if (number === 5 )
            return this.mapper.fiveToRomanNumeral()

        if (number < 5)
            return this.mapper.oneToRomanNumeral() + this.mapper.fiveToRomanNumeral()

        return this.mapper.fiveToRomanNumeral() + this.oneToThreeForRomanNumeral(number - 5)
    }

    private nineToThirtyNineForRomanNumeral(number: number) {
        if (number === 10) 
            return this.mapper.tenToRomanNumeral()
        
        if (number < 10)
            return this.mapper.oneToRomanNumeral() + this.mapper.tenToRomanNumeral()

        return this.mapper.tenToRomanNumeral() + this.oneToThirtyNineForRomanNumeral(number - 10)
    }

    private fortyToEightyNineForRomanNumeral(number: number) {
        if (number === 50)
            return this.mapper.fiftyToRomanNumeral()

        if (number < 50)
            return this.mapper.tenToRomanNumeral() + this.mapper.fiftyToRomanNumeral() + this.oneToThirtyNineForRomanNumeral(number - 40)
        
        return this.mapper.fiftyToRomanNumeral() + this.oneToThirtyNineForRomanNumeral(number - 50)
    }

    private ninetyToThreeHundredEightyForRomanNumeral(number: number) {
        if (number === 100)
            return this.mapper.oneHundredToRomanNumeral()

        if (number < 100) 
            return this.mapper.tenToRomanNumeral() + this.mapper.oneHundredToRomanNumeral() + this.mapNumberToRomanNumeral(number - 90)
        
        return this.mapper.oneHundredToRomanNumeral() + this.mapNumberToRomanNumeral(number - 100)
    }

    private fourHundredToEightHundredNinetyNineForRomanNumeral(number: number) {
        if (number === 500)
            return this.mapper.fiveHundredToRomanNumeral()

        if (number < 500) 
            return this.mapper.oneHundredToRomanNumeral() + this.mapper.fiveHundredToRomanNumeral() + this.mapNumberToRomanNumeral(number - 400)

        return this.mapper.fiveHundredToRomanNumeral() + this.mapNumberToRomanNumeral(number - 500)
    }
}