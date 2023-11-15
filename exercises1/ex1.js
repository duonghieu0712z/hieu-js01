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

const arr = [1_000_000, 2, 123456, 12_000.02, 1_000_987_345.2345];
arr.forEach((value) => console.log(value, "<=>", formatMoney(value)));
