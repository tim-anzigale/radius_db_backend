const express = require('express');
const router = express.Router();
const { getAllSubscriptions, addSubscriptions } = require('../controllers/subscriptionController');

// Route to get all subscriptions
router.get('/', getAllSubscriptions);

// Route to add subscriptions
router.post('/', addSubscriptions);

module.exports = router;
