const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const WeddingSchema = new Schema({
    husband_fullname: { type: String },
    wife_fullname: { type: String },
    husband_cni: { type: String },
    wife_cni: { type: String },
    registe_number: { type: Number }
  
}, {timestamps: true});

const WeddingModel = model("Mariage", WeddingSchema);

module.exports = WeddingModel;