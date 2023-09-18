const mongoose = require('mongoose');

const pdUserSchema = new mongoose.Schema({
  studentId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'StudentData'},
  email: String,
  Rank: Number,
  PD: Number,
  PDMax: Number,
  PDcorrect: Number,
  PDincorrect: Number,
  PdSkipped: Number,
  PDTotalTimeTaken: String,
  PDTimeDuration: Number,
  Totalpdquestions: Number,
  PDTotalAttend: Number,
  PDClassesAttend: Number,
  Testshared: Number,
  testattempted: Number,
  PD_Prec: Number,
  Date:Date
});

module.exports = mongoose.model('PDUser', pdUserSchema);
