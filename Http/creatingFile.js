const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'Files');
// console.log(dirPath);
// for (i = 0; i < 5; i++) {
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`, "This is the simple text for trial");
// }
fs.readdir(dirPath, (err, files) => {
    // console.log(files);
    files.forEach((item) => {
        console.log(`The name of the is ${item}`);
    })
})