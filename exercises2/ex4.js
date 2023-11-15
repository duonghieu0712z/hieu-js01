const findMissingElement = (first, second) =>
    second.filter((val) => !first.includes(val));

console.log(findMissingElement([1, 2, 3, 4], [2, 4, 6, 8]));
console.log(findMissingElement([], [2, 4, 6, 8]));
console.log(findMissingElement([1, 2, 3, 4], []));
console.log(findMissingElement([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(findMissingElement([1, 2, 3, 4], [5, 6, 7, 8]));
