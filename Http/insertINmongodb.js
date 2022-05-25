const dbConnect = require('./mongodb');
const insert = async() => {
    const db = await dbConnect();
    const result = await db.insert([{
        name: 'nord',
        brand: 'oneplus',
        category: 'moblie',
        price: 500
    }, {
        name: 'nord2',
        brand: 'oneplus',
        category: 'moblie',
        price: 560
    }, {
        name: 'nord3',
        brand: 'oneplus',
        category: 'moblie',
        price: 700
    }, {
        name: 'iphone 13',
        brand: 'apple',
        category: 'moblie',
        price: 1500
    }])
    if (result.acknowledged) {
        console.log("Data inserted successfully");
    } else {
        console.log("Failed to insert the data");

    }
};
insert();