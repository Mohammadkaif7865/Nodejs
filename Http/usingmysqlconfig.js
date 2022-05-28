const express = require('express');
const con = require('./mysqlconfig');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    con.query('SELECT * FROM user', (err, data) => {
        if (err) res.send(err);
        else res.send(data);
    })
});
//static data
// app.post('/insert', (req, res) => {
//     const data = {
//         name: 'bhuvan Bam',
//         password: '2344sdge#$',
//         user_type: 'tricker'
//     }
//     con.query('INSERT INTO user SET ?', data, (err, result, fields) => {
//         if (err) err;
//         res.send(result);
//         console.log(result);
//     })
// });
//dynamic data
app.post('/insert', (req, res) => {
    const data = req.body;
    con.query('INSERT INTO user SET ?', data, (err, result, fields) => {
        if (err) throw err;
        res.send(result);
        console.log(result);
    })
});
app.put('/edit/:id', (req, res) => {
    const data = [...Object.values(req.body), req.params.id];
    con.query("UPDATE user SET name = ?, password = ?, user_type = ? where id = ?", data, (err, result, fields) => {
        if (err) throw err;
        res.send(result);
        console.log(result);
    });
});
app.delete('/delete/:id', (req, res) => {
    con.query("Delete from user WHERE id=" + req.params.id, (err, result, fields) => {
        if (err) throw err;
        res.send(result);
        console.log(result);
    });
})
app.listen(5000);