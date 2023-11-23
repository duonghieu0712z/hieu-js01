import { readJsonFile, writeJsonFile } from "./utils.js";

const args = process.argv.splice(2);

const [jsonFile, outputFile] = args;

const json = readJsonFile(jsonFile);
json.address = "where?";

writeJsonFile(outputFile, json);
console.log(`${outputFile} was written.`);
