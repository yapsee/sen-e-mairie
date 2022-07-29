var birthservice = require('./births.service')
module.exports.addBirth = async (req, res) => {

  const getRandomPin = (chars, len)=>[...Array(len)].map(
    (i)=>chars[Math.floor(Math.random()*chars.length)]
  ).join('');

   const birth_data = {
    dad_firstname: req.body.dad_firstname,
    mom_fullname: req.body.mom_fullname,
    firstname:req.body.firstname,
    lastname: req.body.lastname,
    registe_number: getRandomPin('0123456789', 4),
    year: req.body.year,
    sexe:req.body.sexe,
    birth_date: req.body.birth_date,
    place: req.body.place,
    departement:req.body.departement,
    region:req.body.region,
    country:req.body.country
  
  }
    const naissance = await birthservice.addBirth(birth_data)
    res.send(naissance)
};


module.exports.listAllbirths = async (req, res) => {
  const naissances = await birthservice.getAll()
  res.send(naissances)
};


module.exports.findOne = async (req, res) => {
  const naissance = await birthservice.findbyRegisteNumber( req.params.registe_number)
  res.send(naissance)
};