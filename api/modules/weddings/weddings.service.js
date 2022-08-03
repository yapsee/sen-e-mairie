const Wedding = require('./Weddings.schema');

const getRandomPin = (chars, len)=>[...Array(len)].map(
  (i)=>chars[Math.floor(Math.random()*chars.length)]
).join('');

module.exports.addWedding = async (data) => { 
  data.registe_number = getRandomPin('0123456789', 5)
  const result = await Wedding.create(data);
  return result;
}
