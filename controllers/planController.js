const Plan = require('../models/plansModel');

// Function to add plans from plan_data.json to MongoDB
exports.addPlans = async (req, res) => {
  try {
    // Read data from plan_data.json
    const plansData = require('../plan_data.json');

    // Insert plans into MongoDB
    await Plan.insertMany(plansData);
    res.status(201).json({ message: 'Plans added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to get all plans
exports.getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
