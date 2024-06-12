const mongoose = require('mongoose');

const connectdb = async () => {
  try {
    const mongoUri = 'mongodb://localhost:27017/inet_radius_db';
    //const mongoUri = 'mongodb+srv://Admin:Admin@inet-radius-cluster.diog9w3.mongodb.net/inet_radius_db?retryWrites=true&w=majority&appName=inet-radius-cluster';
    ;
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectdb;
