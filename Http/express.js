const express = require('express');
const app = express();
app.get('', (req, res) => {
    console.log("Browser send us this =>>>>", req.query.name);
    res.send("Welcome " + req.query.name);
});
app.get('/about', (req, res) => {
    res.send("This is About page");
});
app.get('/help', (req, res) => {
    res.send("This is help page How can i Help you");
});
app.listen(3000);