const http = require('http');

// function dataConnection(req, res) {
//     // res.write("Hello this is Mohammad kaif");
//     res.write("<h1>Hello this is Mohammad kaif</h1>");
//     res.end();
// }
http.createServer((req, res) => {
    // res.write("Hello this is Mohammad kaif");
    res.write("<h1>Hello this is Mohammad kaif</h1>");
    res.end();
}).listen(4500);