//Express
const express = require('express');
const app = express();
let name;
app.get('', (req, res) => {
    res.send(`<h1> Hello ${req.query.name}</h1>
    <a href="/about">go to form<a>`);
});
app.get('/about', (req, res) => {
    console.log("Browser send us this =>>>>", req.query.name); //late we will know how can we display it as string literals
    res.send(`<h1>Hi ${req.query.name}</h1>
    <form>
    <label for="myName">Name :</label>
    <input type="text" name="name" id="myName" placeholder  = "Your name">
    <button type="submit">Submit</button>
    </form>
    <a href="/">go to home</a>
    `);
});
app.get('/help', (req, res) => {
    res.send(
        [{
                name: "Honey",
                class: "ten"
            },
            {
                name: "Money",
                class: "ten"
            }
        ]
    );
});
app.listen(3000);