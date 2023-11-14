/**
 * @param {number} money
 * @returns {string}
 */
const formatMoney = (money) => {
    if (money < 1000) {
        return money.toString();
    }

    let integerPart, decimalPart, shortenChar;
    if (money / 1e9 >= 1) {
        integerPart = Math.floor(money / 1e9);
        decimalPart = Math.floor((money - integerPart * 1e9) / 1e7);
        shortenChar = "B";
    } else if (money / 1e6 >= 1) {
        integerPart = Math.floor(money / 1e6);
        decimalPart = Math.floor((money - integerPart * 1e6) / 1e4);
        shortenChar = "M";
    } else {
        integerPart = Math.floor(money / 1e3);
        decimalPart = Math.floor((money - integerPart * 1e3) / 1e1);
        shortenChar = "K";
    }

    if (!decimalPart) {
        return integerPart + shortenChar;
    }

    return integerPart + "." + decimalPart + shortenChar;
};

console.log(formatMoney(1000));
console.log(formatMoney(1123400000));
console.log(formatMoney(1342222));
