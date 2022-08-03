var demandeService = require('./demandes.service')
var upl = require('../../../utils/upload-file');

module.exports.addDemande = async (req, res) => {

  let uploadResult;

  try {
    uploadResult = await upl.handleSingleUploadFile(req, res);
  } catch (e) {
    return res.status(422).json({ errors: [e.message] });
  }
  const uploadedFile = uploadResult.file;


  const { body } = uploadResult;

  const demande_data = {
    registe_number: body.registe_number,
    certificate: uploadedFile.filename,
    status: 'in_progress',
    acte_type: body.acte_type,
    reason: body.reason,
    user: req.user


  }
    const demande = await demandeService.addDemande(demande_data) 
    res.send(demande)
};


module.exports.listAllDemandes = async (req, res) => {
    const demandes = await demandeService.listDemandes() 
    res.send(demandes)
};  

module.exports.demandesByUser = async (req,res) => {
  const demandes = await demandeService.demandesByUser(req.user) 
  
  if(demandes) {
    res.send({code: 1, message: 'listes des demandes', demandes,});
  }

  else {
    res.send({code: 0, message: 'aucune demande pour le moment'});
  }

 
}


module.exports.traitement = async (req, res) => {
  const demande = await demandeService.treat(req.body, req.params.id) 
  res.send(demande)
};