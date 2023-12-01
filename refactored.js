
//Refactoring in progress 

//Use better / clearer names 
//abstract away from main function
//Fewer lines of code
//Fewer loops if possible!!!

function generateRomanNumerals(n) { //e.g. 258

    if (n >= 1 && n <= 3999) {

        return digitize(n)
    }
    else {
        return ""
    }
}

function digitize(n) {

    let digitsArr = []
    let strArr = n.toString().split("").reverse() // ['8','5','2']

    for (let i = strArr.length - 1; i >= 0; i--) {

        digitsArr.push(joinNumerals(Number(strArr[i]), (10 ** i)))  //[200,50,8]

    }
    return digitsArr.join('')
}

function joinNumerals(times, order) { //e.g. 200 -> 2 times, order 100

    let str = ""
    let romanUniques = { 1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M' }
    let numeral = romanUniques[order]
    let secondNumeral = romanUniques[order * 5]
    let lastNumeral = romanUniques[order * 10]

    for (let i = 0; i < times; i++) {

        if (1 <= times && 3 >= times) str += numeral
        else if (times === 4) str = numeral + secondNumeral
        else if (times === 5) str = secondNumeral
        else if (times === 6) str = secondNumeral + numeral
        else if (times === 7) str = secondNumeral + numeral + numeral
        else if (times === 8) str = secondNumeral + numeral + numeral + numeral
        else if (times === 9) str = numeral + lastNumeral

    }
    return str
}

module.exports = { generateRomanNumerals }
