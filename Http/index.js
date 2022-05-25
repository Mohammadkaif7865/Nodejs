const dbConnect = require('./mongodb');

// console.log(dbConnect());
// dbConnect().then((res) => {
//     res.find({ name: 'nokia 1100' }).toArray().then((data) => {
//         console.log(data);
//     });
// });
const main = async() => {
    // console.log("Main function is running");
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);

}
main();