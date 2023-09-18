const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  event: { type: String, required: true },
  date: { type: Date, required: true },
  timings: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: false }, // URL field is optional
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
