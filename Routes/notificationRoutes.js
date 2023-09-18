const express = require('express');
const notificationrouter = express.Router();
const notificationController = require('../controllers/notificationController');

notificationrouter.post('/', notificationController.createNotification);
notificationrouter.get('/', notificationController.getNotifications);
notificationrouter.get('/:id', notificationController.getNotificationById);

module.exports = notificationrouter;
