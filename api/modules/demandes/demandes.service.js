const Demande = require('./demandes.schema');

module.exports.addDemande = async (data) => { 
  const result = await Demande.create(data);
  return result;
}


module.exports.listDemandes = async () => { 
  const result = await Demande.find();
  return result;
}

module.exports.treat = async (data, id) => { 
  const result = await Demande.findByIdAndUpdate(id, data, {new: true});
  return result;
}


module.exports.demandesByUser = async (currentUser) => { 
  const result = await Demande.find({ user: currentUser})
  console.log(result);
  if(result.length === 0) {
    return []
  }
  return result;
}

module.exports.findOne = async (id) => { 
  const result = await Demande.findById(id);
  return result;
}