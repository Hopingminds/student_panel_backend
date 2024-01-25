const express = require('express');
const multer = require('multer')
const StudentDataRoute= express.Router();
const {upload} = require('../controllers/uploadDataPath.js');
const {storageApti,storageTech,storagePD}=require('../controllers/uploadDataPath.js')

const uploadsApti = multer({ storage: storageApti });
const uploadsTech = multer({ storage: storageTech });
const uploadsPD = multer({ storage: storagePD });


const {importUser,getUsers,getCourseData,getSingleData,postStudentData,getStudentData,getDateData,Login,Profile,Logout,getDataByEmail,  PostTotalData,getDate} = require('../controllers/StudentData.js');

StudentDataRoute.post('/importApti', uploadsApti.single('file'), (req, res) => importUser(req, res, 'apti'));
StudentDataRoute.post('/importTech', uploadsTech.single('file'), (req, res) => importUser(req, res, 'tech'));
StudentDataRoute.post('/importPD', uploadsPD.single('file'), (req, res) => importUser(req, res, 'pd'));

StudentDataRoute.get('/getAptiUsers', (req, res) => getUsers(req, res, 'apti'));
StudentDataRoute.get('/getTechUsers', (req, res) => getUsers(req, res, 'tech'));
StudentDataRoute.get('/getPDUsers', (req, res) => getUsers(req, res, 'pd'));

StudentDataRoute.get('/getAptiDate', (req, res) => getDate(req, res, 'apti'));
StudentDataRoute.get('/getTechDate', (req, res) => getDate(req, res, 'tech'));
StudentDataRoute.get('/getPDDate', (req, res) => getDate(req, res, 'pd'));

StudentDataRoute.get('/getSingleAptiUsers', (req, res) => getDataByEmail(req, res, 'apti'));
StudentDataRoute.get('/getSingleTechUsers', (req, res) => getDataByEmail(req, res, 'tech'));
StudentDataRoute.get('/getSinglePDUsers', (req, res) => getDataByEmail(req, res, 'pd'));


// StudentDataRoute.post('/upload',upload.single('file'),PostCourseData)
StudentDataRoute.get('/getSingleData',getSingleData);
StudentDataRoute.post('/uploadcourse',upload.single('file'),PostTotalData)

StudentDataRoute.get('/getCourseData',getCourseData)
StudentDataRoute.post('/postStudentData',upload.single('file'),postStudentData)
                .get('/getStudentData',getStudentData)

StudentDataRoute.post('/login',Login)
StudentDataRoute.get('/profile',Profile)
StudentDataRoute.get('/getDateData',getDateData);  
StudentDataRoute.post('/logout',Logout)          




module.exports = StudentDataRoute;