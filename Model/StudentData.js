const mongoose = require('mongoose');

const StudentDataSchema =new mongoose.Schema({
  
    CRMID: {
        type:String,
        required: true,
        unique: true
    },
    name:String,
    contact: Number,
    email:String,
    batch:String,
    course:String,
    startdate:String,

}, { timestamps: true})

const StudentData= mongoose.model('StudentData',StudentDataSchema);

module.exports = StudentData;