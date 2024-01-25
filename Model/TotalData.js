const mongoose = require('mongoose');


const TotalDataSchema = new mongoose.Schema({

  studentId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'StudentData'},
  SrNo: Number,
  email: String,
  Rank: Number,
  Average: Number,
  TotalCorrect: Number,
  Totalincorrect: Number,
  TotalTimeTaken: String,
  TimeDuration: String,
  Totalskipped: Number,
  Total_Marks_obt: Number,
  Total_Marks: Number,
  Overall_Prec: Number,
  Date: Date,
  ClassesAttend: Number,
  TotalAttend: Number,
  Testattempted:Number,
  TestShare: String,
  English: Number,
  EnglishMax: Number,
  English_Prec: Number,
  Apti_Prec: Number,
  Tech_Prec: Number,
  TotalQuestions: Number,
  TopStudent: String,
  loistudends: String,

});

const TotalData = mongoose.model('TotalData',TotalDataSchema);

module.exports = TotalData;