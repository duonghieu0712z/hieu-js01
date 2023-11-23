import * as fs from "node:fs";
import * as path from "node:path";
import sharp from "sharp";

export function readJsonFile(filePath) {
  const buffer = fs.readFileSync(filePath);
  return JSON.parse(buffer);
}

export function writeJsonFile(filePath, json) {
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
}

function isFile(path) {
  return fs.statSync(path).isFile();
}

function isFileType(filePath, fileType) {
  const extname = path.extname(filePath).substring(1);
  return extname === fileType;
}

function isImage(filePath, fileType = null) {
  const imageExtensions = ["jpg", "jpeg", "png", "gif"];
  if (fileType && imageExtensions.includes(fileType)) {
    return isFileType(filePath, fileType);
  }

  const extname = path.extname(filePath).substring(1);
  return imageExtensions.includes(extname);
}

export function findImages(dirPath, type) {
  const files = fs.readdirSync(dirPath, { recursive: true });
  return files.filter((value) => {
    const filePath = `${dirPath}/${value}`;
    return isFile(filePath) && isImage(filePath, type);
  });
}

export function copyPngImages(dirPath, targetDirPath) {
  if (!fs.existsSync(targetDirPath)) {
    fs.mkdirSync(targetDirPath);
  }

  const images = findImages(dirPath, "png");
  images.forEach((value) => {
    const filePath = `${dirPath}/${value}`;
    const basename = path.basename(value);
    const targetPath = `${targetDirPath}/${basename}`;
    fs.copyFileSync(filePath, targetPath);
  });
}

export async function resizeImage(filePath, percent) {
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    const width = Math.trunc((metadata.width * percent) / 100);
    const height = Math.trunc((metadata.height * percent) / 100);

    const buffer = await image.resize(width, height).toBuffer();
    sharp(buffer).toFile(filePath);
  } catch (error) {
    console.log(error);
  }
}

export async function resizeImages(dirPath, percent) {
  const images = findImages(dirPath);
  images.forEach((value) => {
    const filePath = `${dirPath}/${value}`;
    resizeImage(filePath, percent);
  });
}

function isScript(filePath) {
  return isFileType(filePath, "js") || isFileType(filePath, "ts");
}

function findScripts(dirPath) {
  const files = fs.readdirSync(dirPath, { recursive: true });
  return files.filter((value) => {
    const filePath = `${dirPath}/${value}`;
    return isFile(filePath) && isScript(filePath);
  });
}

export function importSrcToIndex() {
  const scripts = findScripts("./src").filter((value) => value !== "index.js");
  const strBuilder = scripts.map((value) => {
    if (isFileType(value, "ts")) {
      value = value.replace(/\.[^/.]+$/, "");
    }
    return `import "./${value}";`;
  });
  fs.writeFileSync("./src/index.js", strBuilder.join("\n"));
}
