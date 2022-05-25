const { MongoClient } = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);
const dataBase = 'ecom';
async function getData() {
    let result = await client.connect();
    let db = result.db(dataBase);
    let collection = db.collection('products');
    let response = await collection.find({ name: "nokia 1100" }).toArray();
    console.log(response);
}
getData();