const mysql = require('mysql');
module.exports = mysql.createConnection({
    hostname: 'localhost',
    user: 'root',
    password: 'ohdude#1@fun',
    database: 'test'
});