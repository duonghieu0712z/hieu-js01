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

const arr = [1, 2, 9, 10, 11, 22, 39, 246, 789, 2421, 3888, 3999];
arr.forEach((value) => console.log(value, toRoman(value)));
