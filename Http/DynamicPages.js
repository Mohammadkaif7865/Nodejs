const { application } = require('express');
const express = require('express');
const path = require('path');
const app = express();
const htmlPath = path.join(__dirname, 'Htmlpages');
app.set('view engine', 'ejs');
app.get('', (req, res) => {
    res.sendFile(`${htmlPath}/index.html`)
});
app.get('/profile', (req, res) => {
    const user = {
        name: 'monu',
        email: 'xyz@gmail.com',
        city: 'San Francisco',
        skills: ['C++', 'HTMl', 'JavaScript', 'CSS', 'C'],
    }
    res.render(`profile`, { user })
}); //Render to send files with data
app.get('/login', (req, res) => {
    const userData = {
        name: "Mona Lisa",
        age: 13,
    }
    res.render('login', { userData });
})
app.get('/about', (req, res) => {
    res.sendFile(`${htmlPath}/about.html`)
});
app.get('/help', (req, res) => {
    res.sendFile(`${htmlPath}/help.html`)
});
app.get('*', (req, res) => {
    res.sendFile(`${htmlPath}/404.html`)
}); //send File to send HTMl files 
app.listen(5500);