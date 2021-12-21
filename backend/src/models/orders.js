const mongoose = require('mongoose');
const {Schema} =mongoose;

const orderSchema = new Schema({
    originPortID: String,
    destinationPortID: String,
    orderID: String,
    orderDescription: String,
    orderWeight: Number,
    containerMeasures: String,
    orderStatus: String
})

module.exports = mongoose.model('Orders',UserSchema)