const Death = require('./deaths.schema');

module.exports.addDeath = async (data) => { 
  const result = await Death.create(data);
  return result;
}

module.exports.getAll = async (data) => { 
  const result = await Death.find();
  return result;
}

module.exports.findbyRegisteNumber = async (registe_number) => { 
  const result = await Death.findOne({registe_number})
  if(!result){
    return 'Aucun acte de deces n\'est lié est à ce numero';
  }
  return result;
}


