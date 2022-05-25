const express = require('express');
const app = express();
const reqFilter = require('./mwFunction');
const route = express.Router();
// app.use(reqFilter);
route.use(reqFilter)
app.get('/', (req, res) => {
    res.send('This is Home Page');
});
app.get('/users', (req, res) => {
    res.send('This is users Page');
});
// app.get('/users', reqFilter, (req, res) => {
//     res.send('This is users Page');
// });
route.get('/about', (req, res) => {
    res.send('This is about Page');
});
route.get('/contact', (req, res) => {
    res.send('This is contact Page');
});
app.use('/', route);

app.listen(3000);