/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * @param {any[]} arr
 * @returns {any}
 */
const randomElement = (arr) => {
    const randomIndex = random(0, arr.length - 1);
    return arr[randomIndex];
};

const arr = ["apple", "banana", "organe"];
for (let i = 0; i < 10; i++) {
    console.log(randomElement(arr));
}
