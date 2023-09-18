const xlsx = require('xlsx');
const Question = require('../Model/question');

// Function to read data from the Excel file and save it to the database
const importDataToDB = async (filePath) => {
  try {
    const workbook = xlsx.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(worksheet, { defval: '' });

    for (const row of data) {
      // Create a new Question object using the row data
      const question = new Question({
        sNo: row['S No.'],
        subject: row['SUBJECT'],
        topic: row['TOPIC'],
        tags: row['TAGS'],
        questionType: row['QUESTION TYPE'],
        questionText: row['QUESTION TEXT'],
        option1: row['OPTION1'],
        option2: row['OPTION2'],
        option3: row['OPTION3'],
        option4: row['OPTION4'],
        option5: row['OPTION5'],
        option6: row['OPTION6'],
        option7: row['OPTION7'],
        option8: row['OPTION8'],
        option9: row['OPTION9'],
        option10: row['OPTION10'],
        rightAnswer: row['RIGHT ANSWER'],
        explanation: row['EXPLANATION'],
        correctMarks: parseFloat(row['CORRECT MARKS']),
        negativeMarks: parseFloat(row['NEGATIVE MARKS']),
      });

      // Save the question to the database
      await question.save();
    }

    console.log('Data imported successfully.');
  } catch (error) {
    console.error('Error importing data:', error);
  }
};

const getData = async (req, res) => {
  try {
    const data = await Question.find(); // Assuming you want to fetch all questions

    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  importDataToDB,
  getData, // Add this line to export the new function
};