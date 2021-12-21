const mongoose = require('mongoose');
const {Schema} =mongoose;

const distanceSchema = new Schema({
    originPortID: String,
    destinationPortID: String,
    distance: Number,
    unitPrice: Number
})


module.exports = mongoose.model('Distance',distanceSchema);