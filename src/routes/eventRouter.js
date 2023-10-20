const express = require('express');
const { eventController } = require('../controllers');
const { verificateToken } = require('../middlewares');
const router = express.Router();

router.get('/', verificateToken, eventController.getLikedEventsByUser);

module.exports = router;
