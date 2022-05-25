const { MongoClient } = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);
const dataBase = 'ecom';
async function dbConnect() {
    let result = await client.connect();
    let db = result.db(dataBase);
    return db.collection('products');
}
module.exports = dbConnect;