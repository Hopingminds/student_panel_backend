const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URL;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB database');
});

// Import the Notification model
const Notification = require('./Model/notification');

// Import and use the route files
const notificationRoutes = require('./Routes/notificationRoutes');
app.use('/notifications', notificationRoutes);

// API endpoint to create a new notification
// ... (The original code for creating notifications remains here)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
