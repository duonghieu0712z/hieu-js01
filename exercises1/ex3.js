/**
 * @param {string} word
 * @returns {number}
 */
const countWord = (word) => {
    if (word.length == 0) {
        return 0;
    }

    let count = 1;
    for (const char of word) {
        if ("A" <= char && char <= "Z") {
            count++;
        }
    }
    return count;
};

console.log(countWord("oneTwoThree"));
