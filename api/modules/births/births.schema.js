const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const BirthSchema = new Schema({
    dad_firstname: { type: String },
    mom_fullname: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    registe_number: { type: Number },
    year: { type: Number},
    sexe: { type: String },
    birth_date: { type: Date },
    place: { type: String },
    departement: { type: String },
    region: { type: String },
    country: { type: String },
  
});

const birthModel = model("Naissance", BirthSchema);

module.exports = birthModel;