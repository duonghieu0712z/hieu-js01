const formatMoney = (money) => {
    const shortenChars = ["", "K", "M", "B"];

    let integerPart, decimalPart, shortenChar;
    for (let i = shortenChars.length - 1; i >= 0; i--) {
        if (money / Math.pow(10, 3 * i) >= 1) {
            integerPart = Math.trunc(money / Math.pow(10, 3 * i));
            decimalPart = Math.trunc((money / Math.pow(10, 3 * i - 2)) % 100);
            shortenChar = shortenChars[i];
            break;
        }
    }

    return !!decimalPart
        ? integerPart + "." + decimalPart + shortenChar
        : integerPart + shortenChar;
};

console.log(formatMoney(234));
console.log(formatMoney(1000));
console.log(formatMoney(1123400000));
console.log(formatMoney(1342222));
