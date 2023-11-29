

function romanUniques(n) {

    if (n === 1) {
        return 'I'
    }
    else if (n === 5) {
        return 'V'
    }
    else if (n === 10) {
        return 'X'
    }
    else if (n === 50) {
        return "L"
    }
    else if (n === 100) {
        return "C"
    }
    else if (n === 500) {
        return "D"
    }
    else if (n === 1000) {
        return "M"
    }

}
function romanNumerals(n) {

    if (n >= 1 || n <= 3999) {
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

        if (num.toString().length === 4) {
            let times = num / 1000
            str += repeatRomanNumerals(times, 1000)
        }
        else if (num.toString().length === 3) {
            let times = num / 100

            str += repeatRomanNumerals(times, 100)
        }
        if (num.toString().length === 2) {
            let times = num / 10
            str += repeatRomanNumerals(times, 10)

        }
        if (num.toString().length === 1) {
            let times = num / 1
            str += repeatRomanNumerals(times, 1)
        }
    })

    return str

}


function repeatRomanNumerals(times, order) {

    let sum = ""
    for (let i = 0; i < times; i++) {

        if (times === 1 || times === 2 || times === 3) {
            sum += romanUniques(order)
        }
        else if (times === 4 && order !== 1000) {
            sum = romanUniques(order) + romanUniques(order * 5)
        }
        else if (times === 5 && order !== 1000) {
            sum = romanUniques(order * 5)
        }
        else if (times === 6 && order !== 1000) {
            sum = romanUniques(order * 5) + romanUniques(order)
        }
        else if (times === 7 && order !== 1000) {
            sum = romanUniques(order * 5) + romanUniques(order) + romanUniques(order)
        }
        else if (times === 8 && order !== 1000) {
            sum = romanUniques(order * 5) + romanUniques(order) + romanUniques(order) + romanUniques(order)
        }
        else if (times === 9 && order !== 1000) {
            sum = romanUniques(order) + romanUniques(order * 10)
        }

    }
    return sum

}
//console.log(romanNumerals(3014))

module.exports = { romanNumerals }
