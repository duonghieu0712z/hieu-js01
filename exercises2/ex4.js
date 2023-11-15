const findMissingElement = (first, second) =>
    second.filter((val) => !first.includes(val));

const arr = [
    [
        [1, 2, 3, 4],
        [2, 4, 6, 8],
    ],
    [[], [2, 4, 6, 8]],
    [[1, 2, 3, 4], []],
    [
        [1, 2, 3, 4],
        [1, 2, 3, 4],
    ],
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
    ],
];
arr.forEach((value) => {
    const [first, second] = value;
    console.log(`[${first}] [${second}] => [${findMissingElement(first,second)}]`);
});
