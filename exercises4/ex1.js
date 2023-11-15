/**
 * @param {number} number
 * @returns {string}
 */
const toRoman = (number) => {
    const romanNumbers = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let romanStr = "";
    for (const roman in romanNumbers) {
        while (number >= romanNumbers[roman]) {
            romanStr += roman;
            number -= romanNumbers[roman];
        }
    }
    return romanStr;
};

console.log(toRoman(39));
console.log(toRoman(246));
console.log(toRoman(789));
console.log(toRoman(2421));
console.log(toRoman(3888));
console.log(toRoman(3999));
