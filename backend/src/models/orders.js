const mongoose = require('mongoose');
const {Schema} =mongoose;

const orderSchema = new Schema({
    originPort: String,
    destinationPort: String,
    orderID: String,
    orderDescription: String,
    orderWeight: Number,
    containerMeasures: String,
    price: Number,
    orderStatus: String
})

module.exports = mongoose.model('Orders',orderSchema);