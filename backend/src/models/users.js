const mongoose = require('mongoose');
const Schema = mongoose.Schema;

new UserSchema({
    user: String,
    password: String,
    is_admin: Boolean
})

module.exports = mongoose.model('Users',UserSchema)