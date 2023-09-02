var multer     = require('multer');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  });
  
const upload = multer({ storage: storage });

const storageApti = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, 'aptiNew');
  },
});

const storageTech = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, 'NewTech');
  },
});

const storagePD = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, 'pdpNEWdata');
  },
});

module.exports = {storageApti,storageTech,storagePD,upload};
