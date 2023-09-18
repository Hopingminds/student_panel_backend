const mongoose = require('mongoose');

const techUserSchema = new mongoose.Schema({
  studentId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'StudentData'},
  email: String,
  Rank: Number,
  Tech: Number,
  TECHMax: Number,
  TECHcorrect: Number,
  TECHincorrect: Number,
  TECHSkipped: Number,
  TECHTotalTimeTaken: String,
  TECHTimeDuration: Number,
  TotalTECHquestions: Number,
  TECHClassesAttend: Number,
  TECHTotalAttend: Number,
  Testshared: Number,
  testattempted: Number,
  TECH_Prec: Number,
  Date:Date
});

module.exports = mongoose.model('TechUser', techUserSchema);
