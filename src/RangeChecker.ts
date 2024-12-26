export class RangeChecker {

    public forRangeOneToThree(number: number) {
        return [1, 2, 3].includes(number)
    }

    public forRangeFourToEight(number: number) {
        return [4, 5, 6, 7, 8].includes(number)
    } 

    public forRangeFortyToEightyNine(number: number) {
        return number >= 40 && number <= 89
    }

    public forRangeNineToThirtyNine(number: number)
    {
        return number >= 9 && number <= 39
    }

    public forRangeOneToThirtyNine(number: number) {
        return this.forRangeOneToThree(number) || 
            this.forRangeFourToEight(number) || 
            this.forRangeNineToThirtyNine(number)
    }

    public forRangeNinetyToThreeHundredEighty(number: number) {
        return number >= 90 && number <= 399
    }

    public forRangeFourHundredToEightHundredNinetyNine(number: number) {
        return number >= 400 && number <= 899
    }

    public forNumberGreaterThanOneThousand(number: number) {
        return number >= 900 
    }
}