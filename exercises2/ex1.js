const _product = (from, to) => {
    let product = 1;
    for (let i = from; i <= to; i++) {
        product *= i;
    }
    return product;
};

const combination = (k, n) => _product(n - k + 1, n) / _product(1, k);

const arr = [
    [4, 9],
    [2, 6],
];
arr.forEach((value) => {
    const [k, n] = value;
    console.log(`C(${k}, ${n}) =`, combination(k, n));
});
