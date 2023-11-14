/**
 * @param {number} from
 * @param {number} to
 * @returns {number}
 */
const _product = (from, to) => {
    if (from > to) {
        return 1;
    }

    let product = 1;
    for (let i = from; i <= to; i++) {
        product *= i;
    }
    return product;
};

/**
 * @param {number} k
 * @param {number} n
 * @returns {number}
 */
const combination = (k, n) => _product(n - k + 1, n) / _product(1, k);

console.log(combination(4, 9));
console.log(combination(2, 6));
