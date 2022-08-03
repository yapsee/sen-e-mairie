const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const UserSchema = new Schema({
    lastname: { type: String },
    firstname: { type: String },
    address: { type: String },
    role: { type: String },
    email: { type: String , required: true},
    password: { type: String, required: true },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;