const Notification = require('../Model/notification');

exports.createNotification = async (req, res) => {
  try {
    const { event, date, timings, description, url } = req.body;
    const notification = new Notification({ event, date, timings, description, url });
    await notification.save();
    res.status(201).json(notification);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create the notification' });
  }
};

exports.getNotifications = async (req, res) => {
  try {
    console.log('Received request to /notifications');
    const notifications = await Notification.find({});
    console.log('Sending response with notifications:', notifications);
    res.status(200).json(notifications);
  } catch (err) {
    console.error('Error fetching notifications:', err);
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
};

exports.getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (!notification) {
      return res.status(404).json({ error: 'Notification not found' });
    }
    res.status(200).json(notification);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch notification' });
  }
};
