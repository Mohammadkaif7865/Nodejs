const mysql = require('mysql');
const con = mysql.createConnection({
    hostname: 'localhost',
    user: 'root',
    password: 'ohdude#1@fun',
    database: 'test'
});
con.connect((err) => {
    if (err) console.log(err);
    else console.log('connection established');
});
con.query("select * from user", (err, result) => {
    if (err) console.log(err);
    console.log("result", result);
});