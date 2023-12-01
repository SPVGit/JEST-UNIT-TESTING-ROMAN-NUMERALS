
//Refactoring in progress 

//Use better / clearer names 
//abstract away from main function
//Fewer lines of code
//Fewer loops if possible!!!

function generateRomanNumerals(n) { //e.g. 258
    if (n >= 1 && n <= 3999) return digitize(n)
    else return ""
}

function digitize(n) {

    let numerals = ''
    let strArr = n.toString().split("").reverse() // ['8','5','2']
    for (let i = strArr.length - 1; i >= 0; i--) {
       numerals += joinNumerals(Number(strArr[i]), (10 ** i)) 
    }
    return numerals
}

function joinNumerals(times, order) { //e.g. 200 -> 2 times, order 100

    let str = ""
    let romanUniques = { 1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M' }
    let repeatNumeral = romanUniques[order]
    let middleNumeral = romanUniques[order * 5]
    let endNumeral = romanUniques[order * 10]

    for (let i = 1; i <= times; i++) {

        if (1 <= times && 3 >= times) str +=  repeatNumeral
        else if (times === 4) str = repeatNumeral + middleNumeral
        else if (times === 5) str = middleNumeral
        else if (times === 6) str = middleNumeral + repeatNumeral
        else if (times === 7) str = middleNumeral + repeatNumeral + repeatNumeral
        else if (times === 8) str = middleNumeral + repeatNumeral + repeatNumeral + repeatNumeral
        else if (times === 9) str = repeatNumeral +  endNumeral

    }
    return str
}

module.exports = { generateRomanNumerals }
