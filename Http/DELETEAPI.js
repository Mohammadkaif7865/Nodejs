const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const express = require('express');
const app = express();
app.use(express.json());
app.get('/', async(req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    // console.log(data);
    res.send(data);
});
app.post('/', async(req, res) => {
    // console.log(req.body);
    // res.send(req.body);
    let data = await dbConnect();
    let result = await data.insert(req.body);
    res.send(result);
});
app.put('/:name', async(req, res) => {
    let data = await dbConnect();
    // let result = await data.updateOne({ name: 'nord 3' }, { $set:  req.body  })//static update
    // let result = await data.updateOne({ name: req.body.name }, { $set: req.body })//dynamic update
    let result = await data.updateOne({ name: req.params.name }, { $set: req.body }) //Params update

    res.send(result);
});
app.delete("/:id", async(req, res) => {
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    res.send(result);
})
app.listen(3000);