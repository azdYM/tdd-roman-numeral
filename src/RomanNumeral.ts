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
        if (this.checker.forRangeOneToThree(number)) 
            return this.toRomanForRangeOneToThree(number)
        
        if (this.checker.forRangeFourToEight(number)) 
            return this.toRomanForRangeFourToEight(number)
        
        if (this.checker.forRangeNineToThirtyNine(number)) 
            return this.toRomanForRangeNineToThirtyNine(number)

        if (this.checker.forRangeFortyToEightyNine(number)) 
            return this.toRomanForRangeFortyToEightyNine(number)

        if (this.checker.forRangeNinetyToThreeHundredEighty(number)) {
            return this.toRomanForRangeNinetyToThreeHundredEighty(number)
        }
    }

    private toRomanForRangeOneToThree(number: number) {
        let romanNumeral = ""
        for(let i = 1; i <= number; i++) {
            romanNumeral += this.mapper.oneToRomanNumeral()
        }
        
        return romanNumeral
    }

    private toRomanForRangeFourToEight(number: number) {
        if (number === 5 )
            return this.mapper.fiveToRomanNumeral()

        if (number < 5)
            return this.mapper.oneToRomanNumeral() + this.mapper.fiveToRomanNumeral()

        return this.mapper.fiveToRomanNumeral() + this.toRomanForRangeOneToThree(number - 5)
    }

    private toRomanForRangeNineToThirtyNine(number: number) {
        if (number === 10) 
            return this.mapper.tenToRomanNumeral()
        
        if (number < 10)
            return this.mapper.oneToRomanNumeral() + this.mapper.tenToRomanNumeral()

        return this.mapper.tenToRomanNumeral() + this.toRomanForRangeToThirtyNine(number - 10)
    }

    private toRomanForRangeFortyToEightyNine(number: number) {
        if (number === 50)
            return this.mapper.fiftyToRomanNumeral()

        if (number < 50)
            return this.mapper.tenToRomanNumeral() + this.mapper.fiftyToRomanNumeral() + this.toRomanForRangeToThirtyNine(number - 40)
        
        return this.mapper.fiftyToRomanNumeral() + this.toRomanForRangeToThirtyNine(number - 50)
    }

    private toRomanForRangeNinetyToThreeHundredEighty(number: number) {
        if (number === 100)
            return this.mapper.oneHundredToRomanNumeral()

        if (number < 100) 
            return this.mapper.tenToRomanNumeral() + this.mapper.oneHundredToRomanNumeral() + this.toRomanForRangeToThirtyNine(number - 90)
        
        if (number > 100)
            return this.mapper.oneHundredToRomanNumeral() + this.toRomanForRangeToThreeHundredEightyNine(number - 100)
    }

    private toRomanForRangeToThirtyNine(number: number) {
        if (this.checker.forRangeOneToThree(number)) 
            return this.toRomanForRangeOneToThree(number)

        if (this.checker.forRangeFourToEight(number))
            return this.toRomanForRangeFourToEight(number)
        
        if (this.checker.forRangeNineToThirtyNine(number)) 
            return this.toRomanForRangeNineToThirtyNine(number)

        return ''
    }

    private toRomanForRangeToThreeHundredEightyNine(number: number) {
        if (this.checker.forRangeOneToThirtyNine(number)) 
            return this.toRomanForRangeToThirtyNine(number)

        if (this.checker.forRangeFortyToEightyNine(number)) 
            return this.toRomanForRangeFortyToEightyNine(number)

        if (this.checker.forRangeNinetyToThreeHundredEighty(number))
            return this.toRomanForRangeNinetyToThreeHundredEighty(number)

        return ''
    } 
}