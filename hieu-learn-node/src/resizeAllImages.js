import { resizeImages } from "./utils.js";

const args = process.argv.splice(2);

const dirPath = args[0];

resizeImages(dirPath, 70);
console.log(`Resized all images of folder '${dirPath}' to 70%`);
