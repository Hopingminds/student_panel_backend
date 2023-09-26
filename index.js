const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const path = require("path");
const fileRoutes = require('./Routes/fileRoutes');
dotenv.config();
const app = express();
const MONGODB_URI = process.env.MONGO_URL;
// Enable CORS
// app.use(cors({
//   credentials: true,
//   origin: 'http://www.studentpanel.hopingminds.tech/'
  
// }));

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}))

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
});

// Serve the uploaded PDF files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Use the file routes
app.use("/", fileRoutes);

// Start the server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
