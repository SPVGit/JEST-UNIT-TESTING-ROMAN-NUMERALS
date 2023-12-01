
//Refactoring in progress 

//Use better / clearer names 
//abstract away from main function
//Fewer lines of code
//Fewer loops if possible!!!

function generateRomanNumerals(n) { //e.g. 258

    if (n >= 1 && n <= 3999) {
        
        return calcRomanNumerals(digitize(n))
    }
    else {
        return ""
    }

}

function digitize(n){

    let digitsArr = []
        let strNum = n.toString() // '258'
        let strArr = strNum.split("").reverse() // ['8','5','2']
        let numLength = strNum.length

        for (let i =numLength - 1; i>=0; i--) {

            digitsArr.push(Number(strArr[i]) * (10 ** i))  //[200,50,8]
            
        }
        return digitsArr

}

function calcRomanNumerals(arr) {

    let str = ""

    arr.forEach((num) => {  // [200,50,8]  

        for(let i=arr.length+1 ; i>=1; i--){  // 4,3,2,1
            let order = 10**(i-1) // 10 **(3-1) = 100
            let times = num / order  //e.g. ... 200 ->  times = 2 ... order = 100
            str+=joinNumerals(times, order)  
        }
    })

    return str

}

function joinNumerals(times, order) {

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

module.exports = { generateRomanNumerals }
