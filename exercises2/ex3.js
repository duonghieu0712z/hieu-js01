const randomElement = (arr) => {
    const randomIndex = Math.trunc(Math.random() * arr.length);
    return arr[randomIndex];
};

const arr = ["apple", "banana", "ograne"];
for (let i = 0; i < 10; i++) {
    console.log(randomElement(arr));
}
