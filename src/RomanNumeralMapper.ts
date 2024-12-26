export class RomanNumeralMapper {
    constructor(
        private map: (number: number) => string
    ) {}

    public oneToThree(number: number) {
        let romanNumeral = ""
        for(let i = 1; i <= number; i++) {
            romanNumeral += this.oneToRomanNumeral()
        }
        
        return romanNumeral
    }

    public fourToEight(number: number) {
        if (number === 5 )
            return this.fiveToRomanNumeral()

        if (number < 5)
            return this.oneToRomanNumeral() + this.fiveToRomanNumeral()

        return this.fiveToRomanNumeral() + this.oneToThree(number - 5)
    }

    public nineToThirtyNine(number: number) {
        if (number === 10) 
            return this.tenToRomanNumeral()
        
        if (number < 10)
            return this.oneToRomanNumeral() + this.tenToRomanNumeral()

        return this.tenToRomanNumeral() + this.map(number - 10)
    }

    public fortyToEightyNine(number: number) {
        if (number === 50)
            return this.fiftyToRomanNumeral()

        if (number < 50)
            return this.tenToRomanNumeral() + this.fiftyToRomanNumeral() + this.map(number - 40)
        
        return this.fiftyToRomanNumeral() + this.map(number - 50)
    }

    public ninetyToThreeHundredEighty(number: number) {
        if (number === 100)
            return this.oneHundredToRomanNumeral()

        if (number < 100) 
            return this.tenToRomanNumeral() + this.oneHundredToRomanNumeral() + this.map(number - 90)
        
        return this.oneHundredToRomanNumeral() + this.map(number - 100)
    }

    public fourHundredToEightHundredNinetyNine(number: number) {
        if (number === 500)
            return this.fiveHundredToRomanNumeral()

        if (number < 500) 
            return this.oneHundredToRomanNumeral() + this.fiveHundredToRomanNumeral() + this.map(number - 400)

        return this.fiveHundredToRomanNumeral() + this.map(number - 500)
    }

    public numberGreaterThanOneThousand(number: number) {
        if (number === 1000)
            return this.oneThousand()

        if (number < 1000)
            return this.oneHundredToRomanNumeral() + this.oneThousand() + this.map(number - 900)
    
        return this.oneThousand() + this.map(number - 1000)
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

    private oneHundredToRomanNumeral() {
        return 'C'
    }

    private fiveHundredToRomanNumeral() {
        return 'D'
    }

    private oneThousand() {
        return 'M'
    }
}