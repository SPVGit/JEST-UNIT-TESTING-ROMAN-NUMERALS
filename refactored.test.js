//npm i jest --save-dev
//npm i jest-cli -g



const {romanNumerals} = require("./refactored")

test("0=nothing", () => {

    expect(romanNumerals(0)).toBe("");//passes

});

test("1=I", () => {

    expect(romanNumerals(1)).toBe("I");//passes

});
test("2=II", () => {

    expect(romanNumerals(2)).toBe("II");//passes

});
test("3=III", () => {

    expect(romanNumerals(3)).toBe("III");//passes

});
test("4=IV", () => {

    expect(romanNumerals(4)).toBe("IV");//passes

});
test("5=V", () => {

    expect(romanNumerals(5)).toBe("V");//passes

});
test("6=VI", () => {

    expect(romanNumerals(6)).toBe("VI");//passes

});
test("7=VII", () => {

    expect(romanNumerals(7)).toBe("VII");//passes

});
test("8=VIII", () => {

    expect(romanNumerals(8)).toBe("VIII");//passes

});
test("9=IX", () => {

    expect(romanNumerals(9)).toBe("IX");//passes

});
test("10=X", () => {

    expect(romanNumerals(10)).toBe("X");//passes

});
test("10=X", () => {

    expect(romanNumerals(10)).toBe("X");//passes

});
test("12=XII", () => {

    expect(romanNumerals(12)).toBe("XII");//passes

});
test("14=XIV", () => {

    expect(romanNumerals(14)).toBe("XIV");//passes

});
test("15=XV", () => {

    expect(romanNumerals(15)).toBe("XV");//passes

});
test("17=XVII", () => {

    expect(romanNumerals(17)).toBe("XVII");//passes

});
test("19=XIX", () => {

    expect(romanNumerals(19)).toBe("XIX");//passes

});
test("30=XXX", () => {

    expect(romanNumerals(30)).toBe("XXX");//passes

});
test("34=XXXIV", () => {

    expect(romanNumerals(34)).toBe("XXXIV");//passes

});
test("39=XXXIX", () => {

    expect(romanNumerals(39)).toBe("XXXIX");//passes

});
test("40=XL", () => {

    expect(romanNumerals(40)).toBe("XL");//passes

});
test("44=XLIV", () => {

    expect(romanNumerals(44)).toBe("XLIV");//passes

});
test("55=LV", () => {

    expect(romanNumerals(55)).toBe("LV");//passes

});
test("122=CXXII", () => {

    expect(romanNumerals(122)).toBe("CXXII");//passes

});
test("345=CCCXLV", () => {

    expect(romanNumerals(345)).toBe("CCCXLV");//passes

});

test("999=CMXCIX", () => {

    expect(romanNumerals(999)).toBe("CMXCIX");//passes

});
test("2008=MMVIII", () => {

    expect(romanNumerals(2008)).toBe("MMVIII");//passes

});
test("3999=MMMCMXCIX", () => {

    expect(romanNumerals(3999)).toBe("MMMCMXCIX");//passes

});
test("4000=nothing", () => {

    expect(romanNumerals(4000)).toBe("");//passes

});