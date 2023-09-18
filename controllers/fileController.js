const FileModel = require('../Model/File');

exports.uploadFile = async (req, res) => {
  try {
    const { originalname, filename, path, mimetype, size } = req.file;
    const { description, companyName } = req.body;

    // Create a new file document
    const file = new FileModel({
      originalname,
      filename,
      path,
      mimetype,
      size,
      description,
      companyName,
    });

    // Save the file document to the database
    await file.save();

    // Send a success response
    res.json({ message: "File uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error uploading file" });
  }
};

exports.getFiles = async (req, res) => {
  try {
    // Retrieve data from the database
    const files = await FileModel.find();

    // Send the data as the API response
    res.json(files);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving data" });
  }
};
