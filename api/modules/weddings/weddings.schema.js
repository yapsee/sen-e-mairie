const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const WeddingSchema = new Schema({
    husband_fullname: { type: String },
    wife_fullname: { type: String },
    husband_cni: { type: String },
    wife_cni: { type: String }
  
});

const WeddingModel = model("Mariage", WeddingSchema);

module.exports = WeddingModel;