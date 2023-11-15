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

    return !!decimalPart ? integerFormat + "." + decimalPart : integerFormat;
};

console.log(formatMoney(1000000));
console.log(formatMoney(123456));
console.log(formatMoney(12000.02));
