const dbConnect = require('./mongodb');
const Delete = async() => {
    let db = await dbConnect();
    let result = await db.deleteOne({ name: 'nord' });
    console.log(result);
    if (result.deletedCount) {
        console.log('Deleted');
    } else {
        console.log('not found');
    }
}
Delete();