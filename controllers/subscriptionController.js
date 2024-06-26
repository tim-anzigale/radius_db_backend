const Subscription = require('../models/subscriptionsModel');

// Function to add subscriptions from user_data.json to MongoDB
exports.addSubscriptions = async (req, res) => {
  try {
    // Read data from user_data.json
    const subscriptionsData = require('../assets/user_data.json');

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


exports.getAllSubscriptions = async (req, res) => {
  try {
    // Get pagination parameters from the query, with default values
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    // Calculate the number of documents to skip
    const skip = (page - 1) * pageSize;

    // Fetch the paginated subscriptions from the database
    const subscriptions = await Subscription.find()
      .populate('plan')
      .skip(skip)
      .limit(pageSize);

    // Get the total count of documents
    const totalSubscriptions = await Subscription.countDocuments();

    // Return the paginated response
    res.status(200).json({
      currentPage: page,
      totalPages: Math.ceil(totalSubscriptions / pageSize),
      pageSize: pageSize,
      totalSubscriptions: totalSubscriptions,
      subscriptions: subscriptions
    });
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    res.status(500).json({ error: error.message });
  }
};
