const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const DeathSchema = new Schema({

    firstname: { type: String },
    lastname: { type: String },
    registe_number: { type: Number },
    sexe:{ type: String },
    death_date: { type: Date },
    place: { type: String },
    country: { type: String },
    reason: { type: String },
  
});

const deathModel = model("Deces", DeathSchema);

module.exports = deathModel;