const dbConnect = require('./mongodb');
const update = async() => {
    let data = await dbConnect();
    let result = await data.update({ name: 'nord 2' }, { $set: { price: 580 } });
    // let result = await data.updateOne({ name: 'nord 2' }, { $set: { price: 580 } });
    console.log(result);
}
update();