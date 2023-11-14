/**
 * @param {number[]} first
 * @param {number[]} second
 * @returns {number[]}
 */
const findMissingElement = (first, second) =>
    second.filter((val) => !first.includes(val));

console.log(findMissingElement([1, 2, 3, 4], [2, 4, 6, 8]));
