var weddingService = require('./weddings.service')
var upl = require('../../../utils/upload-file');

module.exports.addWedding = async (req, res) => {
  

  let uploadResult;

  try {
    uploadResult = await upl.handleManyUploadFile(req, res);
  } catch (e) {
    return res.status(422).json({ errors: [e.message] });
  }
  const uploadedFile = uploadResult.files;

  const { body } = uploadResult;

  const wedding_data = {
    husband_fullname: body.husband_fullname,
    wife_fullname: body.wife_fullname,
    husband_cni: uploadedFile['husband_cni'][0].filename,
    wife_cni:  uploadedFile['wife_cni'][0].filename
  }
    const mariage = await weddingService.addWedding(wedding_data) 
    res.send(mariage)
};