var deathservice = require('./deaths.service')
module.exports.addDeath = async (req, res) => {

  const getRandomPin = (chars, len)=>[...Array(len)].map(
    (i)=>chars[Math.floor(Math.random()*chars.length)]
  ).join('');

   const death_data = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    registe_number: getRandomPin('0123456789', 5),
    sexe:req.body.sexe,
    death_date: req.body.death_date,
    place: req.body.place,
    country: req.body.country,
    reason: req.body.reason,
  }
    const deces = await deathservice.addDeath(death_data)
    res.send(deces)
};


module.exports.listAllDeaths = async (req, res) => {
  const deces = await deathservice.getAll()
  res.send(deces)
};


module.exports.findOne = async (req, res) => {
  const deces = await deathservice.findbyRegisteNumber( req.params.registe_number)
  res.send(deces)
};