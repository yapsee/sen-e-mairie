const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const { Schema, model, Types} = mongoose;

const ProfilSchema = new Schema({
    label: { type: String},
    users: [
        {type: Types.ObjectId, ref: "User"}
    ]
});

ProfilSchema.plugin(uniqueValidator);

const ProfilModel = model("Profil", ProfilSchema);

module.exports = ProfilModel;