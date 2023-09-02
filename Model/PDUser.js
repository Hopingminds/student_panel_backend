const mongoose = require('mongoose');

const pdUserSchema = new mongoose.Schema({
  studentId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'StudentData'},
  email: String,
  Rank: Number,
  Pd: Number,
  PDMax: Number,
  PDcorrect: Number,
  PDincorrect: Number,
  PdSkipped: Number,
  PDTotalTimeTaken: String,
  PDTimeDuration: Number,
  Totalpdquestion: Number,
  PDTotalclasses: Number,
  PDClassesAttented: Number,
  Testshared: Number,
  Testattempted: Number,
  PD_Prec: Number,
  date:Date
});

module.exports = mongoose.model('PDUser', pdUserSchema);
