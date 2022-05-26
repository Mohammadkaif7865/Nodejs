const mongoose = require('mongoose');
const url = 'mongodb://0.0.0.0:27017/ecom';
mongoose.connect(url);
const ProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    category: String,
    price: Number,
});
const saveInDB = async() => {
    const Product = mongoose.model('products', ProductSchema);
    let data = new Product({
        name: "f19",
        brand: "oppo",
        category: "mobile",
        price: 634,
        condition: "average"
    });
    let result = await data.save();
    console.log(result);
}
const updateInDB = async() => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne({ name: "f19" }, {
        $set: { price: 556 }
    });
    console.log(data);
};
const deleteInDB = async() => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteOne({ name: "f19" });
    console.log(data);
};
const findInDB = async() => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.find({ name: "iphone 13" });
    console.log(data);
};
findInDB();
// deleteInDB();
// updateInDB();
// saveInDB();