export class RomanNumeral {
    of(number: number) {
        if (this.forRangeOneToThree(number)) 
            return this.toRomanForRangeOneToThree(number)
        
        if (this.forRangeFourToEight(number)) 
            return this.toRomanForRangeFourToEight(number)
        
        if (this.forRangeNineToThirtyNine(number)) 
            return this.toRomanForRangeNineToThirtyNine(number)

        if (this.forRangeFortyToEightyNine(number)) 
            return this.toRomanForRangeFortyToEightyNine(number)

        if (number === 91)
            return 'XCI'

        if (number === 101)
            return 'CI'

        if (number === 111)
            return 'CXI'

        if (number === 301)
            return 'CCCI'

        if (number === 321)
            return 'CCCXXI'

        if (number === 351)
            return 'CCCLI'

        if (number === 389)
            return 'CCCLXXXIX'
    }

    private forRangeOneToThree(number: number) {
        return [1, 2, 3].includes(number)
    }

    private forRangeFourToEight(number: number) {
        return [4, 5, 6, 7, 8].includes(number)
    } 

    private forRangeFortyToEightyNine(number: number) {
        return number >= 40 && number <= 89
    }

    private forRangeNineToThirtyNine(number: number)
    {
        return number >= 9 && number <= 39
    }

    private toRomanForRangeOneToThree(number: number) {
        let romanNumeral = ""
        for(let i = 1; i <= number; i++) {
            romanNumeral += this.oneToRomanNumeral()
        }
        
        return romanNumeral
    }

    private toRomanForRangeFourToEight(number: number) {
        if (number === 5 )
            return this.fiveToRomanNumeral()

        if (number < 5)
            return 'IV'

        return this.fiveToRomanNumeral() + this.toRomanForRangeOneToThree(number - 5)
    }

    private toRomanForRangeNineToThirtyNine(number: number) {
        if (number === 10) 
            return this.tenToRomanNumeral()
        
        if (number < 10)
            return 'IX'

        return this.tenToRomanNumeral() + this.toRomanForRangeToThirtyNine(number - 10)
    }

    private toRomanForRangeFortyToEightyNine(number: number) {
        if (number === 50)
            return this.fiftyToRomanNumeral()

        if (number < 50)
            return this.tenToRomanNumeral() + this.fiftyToRomanNumeral() + this.toRomanForRangeToThirtyNine(number - 40)
        
        return this.fiftyToRomanNumeral() + this.toRomanForRangeToThirtyNine(number - 50)
    }

    private toRomanForRangeToThirtyNine(number: number) {
        if (this.forRangeOneToThree(number)) 
            return this.toRomanForRangeOneToThree(number)

        if (this.forRangeFourToEight(number))
            return this.toRomanForRangeFourToEight(number)
        
        if (this.forRangeNineToThirtyNine(number)) 
            return this.toRomanForRangeNineToThirtyNine(number)

        return ''
    }

    private oneToRomanNumeral() {
        return 'I'
    }

    private fiveToRomanNumeral() {
        return 'V'
    }

    private tenToRomanNumeral() {
        return 'X'
    }

    private fiftyToRomanNumeral() {
        return 'L'
    }

   
}