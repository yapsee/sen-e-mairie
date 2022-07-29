const Birth = require('./births.schema');

module.exports.addBirth = async (data) => { 
  const result = await Birth.create(data);
  return result;
}

module.exports.getAll = async (data) => { 
  const result = await Birth.find();
  return result;
}

module.exports.findbyRegisteNumber = async (registe_number) => { 
  const result = await Birth.findOne({registe_number})
  if(!result){
    return 'Aucun acte n\'est lié est à ce numero de registre';
  }
  return result;
}


