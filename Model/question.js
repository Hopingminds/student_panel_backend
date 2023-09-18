const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  subject: String,
  topic: String,
  tags: String,
  questionType: String,
  questionText: String,
  optionA: String,
  optionB: String,
  optionC: String,
  optionD: String,
  correctOption: String,
  explanation: String,
  correctMarks: Number,
  negativeMarks: Number,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
