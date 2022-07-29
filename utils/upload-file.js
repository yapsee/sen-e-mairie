const multer = require('multer');
const path = require('path');
// path stockage 
const uploadFilePath = path.resolve(__dirname, 'public/uploads');

// destination and  names of uploads couple cards
const storageFile  = multer.diskStorage({
  destination: uploadFilePath,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
}
});

// check the format of the uploaded cards
const uploadFile = multer({
  storage: storageFile,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter(req, file, callback) {
    const extension = ['.png', '.jpg', '.jpeg'].indexOf(path.extname(file.originalname).toLowerCase()) >= 0;
    const mimeType = ['image/png', 'image/jpg', 'image/jpeg'].indexOf(file.mimetype) >= 0;

    if (extension && mimeType) {
      return callback(null, true);
    }
    callback(new Error('Invalid file type. Only picture file on type PNG and JPG are allowed!'));
  },
}).fields([{ name: 'husband_cni', maxCount: 1 }, { name: 'wife_cni', maxCount: 1}]) ;



const handleSingleUploadFile = async (req, res) => {
  return new Promise((resolve, reject) => {
    uploadFile(req, res, (error) => {
      if (error) {
        reject(error);
      }

      resolve({ files: req.files, body: req.body });
    });
  });
};


module.exports = { handleSingleUploadFile };