//export from module
const fs = require("fs");
const path = require("path");

function getFilePath() {
    return path.join(process.cwd(), "file.txt");
}

function writeToFile(filePath, string) {
    FileSystem.writeToFileSync(filePath, string);
}

function readFromFile(filePath) {
    return fs.readFileSync(filePath).toString();

}
exports.getFilePath = getFilePath;
exports.writeToFile = writeToFile;
exports.readFromFile = readFromFile;