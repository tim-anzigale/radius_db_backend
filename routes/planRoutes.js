const express = require('express');
const router = express.Router();
const { getAllPlans, addPlans } = require('../controllers/planController');

// Route to get all plans
router.get('/', getAllPlans);

// Route to add plans
router.post('/', addPlans);

module.exports = router;
