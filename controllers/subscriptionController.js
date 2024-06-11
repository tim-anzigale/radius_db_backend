const Subscription = require('../models/subscriptionsModel');

// Function to add subscriptions from user_data.json to MongoDB
exports.addSubscriptions = async (req, res) => {
  try {
    // Read data from user_data.json
    const subscriptionsData = require('../user_data.json');

    // Log the data to the console before inserting
    console.log('Data being read from user_data.json:', JSON.stringify(subscriptionsData, null, 2));

    // Insert subscriptions into MongoDB
    await Subscription.insertMany(subscriptionsData.subscriptions);

    // Fetch the inserted data to confirm
    const insertedSubscriptions = await Subscription.find();
    console.log('Data in MongoDB after insertion:', JSON.stringify(insertedSubscriptions, null, 2));

    res.status(201).json({ message: 'Subscriptions added successfully' });
  } catch (error) {
    console.error('Error adding subscriptions:', error);
    res.status(500).json({ error: error.message });
  }
};

// Function to get all subscriptions
exports.getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find().populate('plan');
    res.status(200).json(subscriptions);
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    res.status(500).json({ error: error.message });
  }
};
