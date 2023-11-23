import { findImages } from "./utils.js";

const args = process.argv.splice(2);

const dirPath = args[0];

const images = findImages(dirPath);
console.log(`List all images in folder '${dirPath}':`);
console.log(images);
