/**
 * @param {number} money
 * @returns {string}
 */
const formatMoney = (money) => {
    const moneyStr = money.toString();

    const [integerPart, decimalPart] = moneyStr.split(".");

    const integerLen = integerPart.length;
    let integerFormat = "";
    for (let i = integerLen - 1; i >= 0; i--) {
        integerFormat = integerPart[i] + integerFormat;
        if ((integerLen - i) % 3 === 0 && i !== 0) {
            integerFormat = "," + integerFormat;
        }
    }

    if (!decimalPart) {
        return integerFormat;
    }

    return integerFormat + "." + decimalPart;
};

console.log(formatMoney(12000));
console.log(formatMoney(12000.34));
