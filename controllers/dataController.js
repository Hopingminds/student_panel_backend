const xlsx = require('xlsx');
const Question = require('../Model/question');

const importDataToDB = async (filePath) => {
  try {
    const workbook = xlsx.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(worksheet, { defval: '' });

    for (const row of data) {
      const question = new Question({
        subject: row['SUBJECT'],
        topic: row['TOPIC'],
        tags: row['TAGS'],
        questionType: row['QUESTION TYPE'],
        questionText: row['QUESTION TEXT'],
        optionA: row['a'],
        optionB: row['b'],
        optionC: row['c'],
        optionD: row['d'],
        correctOption: row['Correct Option'],
        explanation: row['EXPLANATION'],
        correctMarks: parseFloat(row['Correct Marks']),
        negativeMarks: parseFloat(row['Negative Marks']),
      });

      await question.save();
    }

    console.log('Data imported successfully.');
  } catch (error) {
    console.error('Error importing data:', error);
  }
};

module.exports = { importDataToDB };
