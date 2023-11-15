const numbers = [
    "không",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
];

const ones = ["", "mốt", "hai", "ba", "tư", "lăm", "sáu", "bảy", "tám", "chín"];

/**
 * @param {number} number
 * @returns {string}
 */
const _read2Digits = (number) => {
    if (number < 10) {
        return numbers[number];
    }

    if (number == 10) {
        return "mười";
    }

    const one = number % 10;
    if (number < 20) {
        if (one === 5) {
            return "mười lăm";
        }
        return "mười " + numbers[one];
    }

    const ten = Math.trunc(number / 10);
    if (number % 10 === 0) {
        return numbers[ten] + " mươi";
    }

    return numbers[ten] + " mươi " + ones[one];
};

/**
 * @param {number} number
 * @param {boolean} withZero
 * @returns {string}
 */
const _read3Digits = (number, withZero = false) => {
    if (number < 100 && !withZero) {
        return _read2Digits(number);
    }

    const hundred = Math.trunc(number / 100);
    const ten = number % 100;
    if (ten === 0) {
        return numbers[hundred] + " trăm";
    }

    if (ten < 10) {
        const unit = ten % 10;
        return numbers[hundred] + " trăm linh " + numbers[unit];
    }

    return numbers[hundred] + " trăm " + _read2Digits(ten);
};

/**
 * @param {number} number
 * @returns {string}
 */
const _read9Digits = (number) => {
    if (number < 1000) {
        return _read3Digits(number);
    }

    const units = ["", " nghìn", " triệu"];

    let numStr = "";
    let i = 0;
    while (number > 0) {
        const thousand = Math.trunc(number / 1000);
        const hundred = number % 1000;
        if (hundred === 0) {
            numStr += units[i];
        } else {
            numStr =
                _read3Digits(hundred, thousand !== 0) + units[i] + " " + numStr;
        }

        number = thousand;
        i++;
    }

    numStr = numStr.trim();
    return numStr;
};

/**
 * @param {number} number
 * @returns {string}
 */
const readNumber = (number) => {
    if (number < 1e9) {
        return _read9Digits(number);
    }

    let numStr = "";
    let isOne = true;
    while (number > 0) {
        const million = number % 1e9;
        numStr = _read9Digits(million) + ("" ? isOne : " tỷ ") + numStr;
        number = Math.trunc(number / 1e9);
    }

    return numStr;
};

const arr = [
    0, 1, 10, 11, 14, 15, 20, 31, 52, 65, 100, 101, 105, 214, 344, 1001, 1202,
    2000, 3456, 10000, 23456, 123456,
];
arr.forEach((value) => console.log(value, readNumber(value)));
