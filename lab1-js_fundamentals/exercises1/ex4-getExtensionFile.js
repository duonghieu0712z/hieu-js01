const getExtensionFile = (file) => file.split(".").pop();

const arr = ["image.png", "sound.mp3", "helloworld.txt", "thisisgame.tar.gz"];
arr.forEach((value) => console.log(value, "=>", getExtensionFile(value)));
