const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to the database
connectDB();

// Import routes
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const planRoutes = require('./routes/planRoutes');

// Use routes
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/plans', planRoutes);

// Define a simple route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
