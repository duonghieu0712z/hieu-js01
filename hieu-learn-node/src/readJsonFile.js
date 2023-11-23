import { readJsonFile } from "./utils.js";

const args = process.argv.splice(2);

const jsonFile = args[0];

const json = readJsonFile(jsonFile);
console.log(json);
