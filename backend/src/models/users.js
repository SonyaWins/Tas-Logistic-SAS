const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {Schema} =mongoose;

const UserSchema = new Schema({
    email: String,
    password: String,
    is_admin: Boolean 
})
UserSchema.methods.hashPassword = (password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}

UserSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password,this.password);

};

module.exports = mongoose.model('Users',UserSchema)