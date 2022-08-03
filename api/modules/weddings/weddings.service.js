const Wedding = require('./Weddings.schema');

const getRandomPin = (chars, len)=>[...Array(len)].map(
  (i)=>chars[Math.floor(Math.random()*chars.length)]
).join('');

module.exports.addWedding = async (data) => { 
  data.registe_number = getRandomPin('0123456789', 5)
  const result = await Wedding.create(data);
  return result;
}

module.exports.getAll = async (data) => { 
  const result = await Wedding.find();
  return result;
}

module.exports.findbyRegisteNumber = async (registe_number) => { 
  const result = await Wedding.findOne({registe_number})
  if(!result){
    return 'Aucun acte de deces n\'est lié est à ce numero';
  }
  return result;
}