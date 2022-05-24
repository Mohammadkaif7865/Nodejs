const express = require('express');
const app = express();
const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("Please provide a valid age");
    } else if (req.query.age < 18) {
        res.send("You cannot use this page , You are under 18");
    } else {

        next();
    }
};
app.use(reqFilter);
app.get('/', (req, res) => {
    res.send('This is Home Page');
});
app.get('/users', (req, res) => {
    res.send('This is users Page');
});

app.listen(3000);