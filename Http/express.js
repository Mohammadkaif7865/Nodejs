const express = require('express');
const app = express();
app.get('', (req, res) => {
    res.send("This is Home page");
});
app.get('/about', (req, res) => {
    res.send("This is About page");
});
app.get('/help', (req, res) => {
    res.send("This is help page How can i Help you");
});
app.listen(3000);