const fs = require('fs');
const path = require('path');
const { Z_FIXED } = require('zlib');
const input = process.argv;
const dirPath = path.join(__dirname, 'Files');
const filePath = `${dirPath}/honey.txt`;
//Create File
// fs.writeFileSync(filePath, "Hello world!!");
// console.log(dirPath);
//Read the file
// fs.readFile(filePath, 'utf8', (err, data) => {
//     console.log(data);
// });
//Update the file with input process
// fs.appendFile(filePath, input[2], (err) => {
//     if (err) throw err
//     else console.log("Updated file");
// });
//Rename the given file
// fs.rename(filePath, `${dirPath}/Bee.txt`, (err) => {
//     if (err) throw err;
//     else console.log("Renamed file");
// })
//Delete File
// fs.unlinkSync(`${dirPath}/Bee.txt`);