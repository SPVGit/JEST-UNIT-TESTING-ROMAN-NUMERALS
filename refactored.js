
//Refactoring in progress

function romanNumerals(n) {

    if (n >= 1 && n <= 3999) {
        let digitsArr = []
        let strNum = n.toString()
        let strArr = strNum.split("").reverse()
        let numLength = strNum.length

        for (let i = numLength - 1; i >= 0; i--) {

            digitsArr.push(Number(strArr[i]) * (10 ** i)) 

        }

        return calcRomanNumerals(digitsArr)
    }
    else {
        return ""
    }


}

function calcRomanNumerals(arr) {

    let str = ""

    arr.forEach((num) => {

        for(let i=4;i>=1;i--){
            let times = num /10**(i-1)
            str+=repeatRomanNumerals(times, 10**(i-1))
        }
    })

    return str

}


function repeatRomanNumerals(times, order) {

    let sum = ""
    let romanUniques = {1:'I', 5:'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000:'M'}
    let numeral = romanUniques[order]
    let secondNumeral = romanUniques[order*5]
    let lastNumeral = romanUniques[order * 10]

    for (let i = 0; i < times; i++) {

        if (1<=times && 3>=times) sum += numeral
        else if (times === 4 ) sum = numeral + secondNumeral
        else if (times === 5 ) sum = secondNumeral
        else if (times === 6 ) sum = secondNumeral + numeral
        else if (times === 7 ) sum = secondNumeral + numeral + numeral
        else if (times === 8 ) sum = secondNumeral + numeral + numeral + numeral
        else if (times === 9 ) sum = numeral + lastNumeral
        
    }
    return sum

}

module.exports = { romanNumerals }
