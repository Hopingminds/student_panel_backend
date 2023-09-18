const express = require('express');
const Questionrouter = express.Router();
const multer = require('multer');
const controller = require('../controllers/dataAndQuestionController.js');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.xlsx');
  },
});

const upload = multer({ storage });

// Upload route to handle file upload
Questionrouter.post('/question', upload.single('file'), controller.importDataToDB);
Questionrouter.get('/api/data', controller.getData);
module.exports = Questionrouter;
