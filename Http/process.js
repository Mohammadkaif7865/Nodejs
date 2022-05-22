const fs = require('fs');
const input = process.argv;
if (input[2] == 0) {
    fs.appendFile(input[3], input[4], (err) => {
        console.error(err);
    });
} else if (input[2] == 1) {
    fs.unlinkSync(input[3]);
} else {
    console.log(`invalid choice choose 1 to delete the file and 0 to append the file`);
}

// console.log(process.argv);