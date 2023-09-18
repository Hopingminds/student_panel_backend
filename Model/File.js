const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    originalname: String,
    filename: String,
    path: String,
    mimetype: String,
    size: Number,
    description: String,
    companyName: String,
  },
  {
    timestamps: true // Automatically add createdAt and updatedAt fields
  }
);


const File = mongoose.model("File", fileSchema);

module.exports = File;
