const formatShortenMoney = (money) => {
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

const arr = [234, 2, 1000, 1_123_400_000, 1_342_222];
arr.forEach((value) => console.log(value, "<=>", formatShortenMoney(value)));
