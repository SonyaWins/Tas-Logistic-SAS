const mongoose = require('mongoose');
const {mongodb} = require('./keys');
const { db } = require('./models/users');

mongoose.connect(mongodb.URI,{})
    .then(db=> console.log('db connected'))
    .catch(err=>console.error(err));