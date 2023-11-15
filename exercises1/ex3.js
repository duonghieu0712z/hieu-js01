const countWord = (word) => {
    if (word.length == 0) {
        return 0;
    }

    let count = 1;
    for (let i = 1; i < word.length; i++) {
        if (word[i] >= "A" && word[i] <= "Z") {
            count++;
        }
    }
    return count;
};

const arr = ["", "oneTwoThree", "hello", "HTML"];
arr.forEach((value) => console.log(value, "=>", countWord(value)));
