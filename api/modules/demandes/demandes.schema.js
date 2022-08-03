const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const DemandeSchema = new Schema({
    certificate: { type: String }, // photo du bulletin 
    registe_number: { type: Number }, // numero de registre
    status: { type: String },    // in_progress, denied, approved
    acte_type: { type: String }, // deces, naissances,constructions, mariages
    reason: { type: String}, // to_register, to_deliver
    user: { type: Schema.Types.ObjectId, ref: 'User' },


});

const DemandeModel = model("demande", DemandeSchema);

module.exports = DemandeModel;