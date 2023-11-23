import { copyPngImages } from "./utils.js";

const args = process.argv.splice(2);

const [dirPath, targetDirPath] = args;

copyPngImages(dirPath, targetDirPath);
console.log(`Copied all PNG images from ${dirPath} to ${targetDirPath}`);
