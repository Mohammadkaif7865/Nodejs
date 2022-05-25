const http = require('http');
const data = require('./data');

// function dataConnection(req, res) {
//     // res.write("Hello this is Mohammad kaif");
//     res.write("<h1>Hello this is Mohammad kaif</h1>");
//     res.end();
// }
http.createServer((req, res) => {
    res.writeHead(200, { 'contentType': 'application\json' });
    res.write(JSON.stringify(data));
    res.end();
}).listen(4500);