//npm i jest --save-dev
//npm i jest-cli -g



const {generateRomanNumerals} = require("./refactored")

test("0=nothing", () => {

    expect(generateRomanNumerals(0)).toBe("");//passes

});

test("1=I", () => {

    expect(generateRomanNumerals(1)).toBe("I");//passes

});
test("2=II", () => {

    expect(generateRomanNumerals(2)).toBe("II");//passes

});
test("3=III", () => {

    expect(generateRomanNumerals(3)).toBe("III");//passes

});
test("4=IV", () => {

    expect(generateRomanNumerals(4)).toBe("IV");//passes

});
test("5=V", () => {

    expect(generateRomanNumerals(5)).toBe("V");//passes

});
test("6=VI", () => {

    expect(generateRomanNumerals(6)).toBe("VI");//passes

});
test("7=VII", () => {

    expect(generateRomanNumerals(7)).toBe("VII");//passes

});
test("8=VIII", () => {

    expect(generateRomanNumerals(8)).toBe("VIII");//passes

});
test("9=IX", () => {

    expect(generateRomanNumerals(9)).toBe("IX");//passes

});
test("10=X", () => {

    expect(generateRomanNumerals(10)).toBe("X");//passes

});
test("10=X", () => {

    expect(generateRomanNumerals(10)).toBe("X");//passes

});
test("12=XII", () => {

    expect(generateRomanNumerals(12)).toBe("XII");//passes

});
test("14=XIV", () => {

    expect(generateRomanNumerals(14)).toBe("XIV");//passes

});
test("15=XV", () => {

    expect(generateRomanNumerals(15)).toBe("XV");//passes

});
test("17=XVII", () => {

    expect(generateRomanNumerals(17)).toBe("XVII");//passes

});
test("19=XIX", () => {

    expect(generateRomanNumerals(19)).toBe("XIX");//passes

});
test("30=XXX", () => {

    expect(generateRomanNumerals(30)).toBe("XXX");//passes

});
test("34=XXXIV", () => {

    expect(generateRomanNumerals(34)).toBe("XXXIV");//passes

});
test("39=XXXIX", () => {

    expect(generateRomanNumerals(39)).toBe("XXXIX");//passes

});
test("40=XL", () => {

    expect(generateRomanNumerals(40)).toBe("XL");//passes

});
test("44=XLIV", () => {

    expect(generateRomanNumerals(44)).toBe("XLIV");//passes

});
test("55=LV", () => {

    expect(generateRomanNumerals(55)).toBe("LV");//passes

});
test("122=CXXII", () => {

    expect(generateRomanNumerals(122)).toBe("CXXII");//passes

});
test("345=CCCXLV", () => {

    expect(generateRomanNumerals(345)).toBe("CCCXLV");//passes

});

test("999=CMXCIX", () => {

    expect(generateRomanNumerals(999)).toBe("CMXCIX");//passes

});
test("2008=MMVIII", () => {

    expect(generateRomanNumerals(2008)).toBe("MMVIII");//passes

});
test("3999=MMMCMXCIX", () => {

    expect(generateRomanNumerals(3999)).toBe("MMMCMXCIX");//passes

});
test("4000=nothing", () => {

    expect(generateRomanNumerals(4000)).toBe("");//passes

});