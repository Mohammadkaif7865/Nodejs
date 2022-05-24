const express = require('express');
const path = require('path');
const app = express();
const htmlPath = path.join(__dirname, 'Htmlpages');
// console.log(htmlPath);
// app.use(express.static(htmlPath));
app.get('', (req, res) => {
    res.sendFile(`${htmlPath}/index.html`)
});
app.get('/about', (req, res) => {
    res.sendFile(`${htmlPath}/about.html`)
});
app.get('/help', (req, res) => {
    res.sendFile(`${htmlPath}/help.html`)
});
app.get('*', (req, res) => {
    res.sendFile(`${htmlPath}/404.html`)
})
app.listen(5500);