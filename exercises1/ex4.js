const getExtensionFile = (file) => {
    const [, type] = file.split(".");
    return type;
};

console.log(getExtensionFile("image.png"));
console.log(getExtensionFile("sound.mp3"));
