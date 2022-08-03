const Wedding = require('./Weddings.schema');

module.exports.addWedding = async (data) => { 
  const result = await Wedding.create(data);
  return result;
}
