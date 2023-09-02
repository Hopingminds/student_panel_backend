const mongoose = require('mongoose');


const CourseDataSchema = new mongoose.Schema({

  studentId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'StudentData'},
  SrNo: Number,
  email: String,
  Apti: Number,
  AptiMax: Number,
  Apti_Prec: Number,
  English: Number,
  EnglishMax: Number,
  English_Prec: Number,
  Tech: Number,
  TechMax: Number,
  Tech_Prec: Number,
  Total_Marks_obt: Number,
  Total_Marks: Number,
  Overall_Prec: Number,
  Average: Number,
  Date: Date,
  ClassesAttend: Number,
  TotalAttend: Number,
  TotalCorrect: Number,
  Totalincorrect: Number,
  Totalskipped: Number,
  Apticorrect: Number,
  Aptiincorrect: Number,
  AptiSkipped: Number,
  PDcorrect: Number,
  PDincorrect: Number,
  PdSkipped: Number,
  techcorrect: Number,
  techincorrect: Number,
  TechSkipped: Number,
  TotalTimeTaken: String,
  Aptitime: Number,
  Pdtime: Number,
  Techtime: Number,
  TimeDuration: String,
  TotalQuestions: Number,
  Totalaptiquestions: Number,
  Totalpdquestions: Number,
  Totaltechquestions: Number,
  TopStudent: String,
  Rank: Number,
  TestShare: String,
  loistudends: String,
  Testattempted:Number


});

const CourseData = mongoose.model('CourseData',CourseDataSchema);

module.exports = CourseData;