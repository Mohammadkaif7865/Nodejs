const fs = require('fs');
// fs.writeFile("hello.txt", "Here is my my first code of file system in nodejs", function(err) {
//     if (err) throw err;
//     console.log("saved");
// });//__dirname directory name __filename file name
fs.appendFile("hello.txt", "Go!", function(err) {
    if (err) throw err;
    console.log("saved");
});