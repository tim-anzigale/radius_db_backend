const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const https = require('https');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

// SSL Certificate Paths
const SSL_KEY_PATH = process.env.SSL_KEY_PATH || "";
const SSL_CRT_PATH = process.env.SSL_CRT_PATH || "";

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

// Get SSL Documents
let privateKey, certificate;

try {
  privateKey = fs.readFileSync(SSL_KEY_PATH, 'utf8');
} catch (err) {
  console.error(`Error reading private key from ${SSL_KEY_PATH}:`, err.message);
  process.exit(1);
}

try {
  certificate = fs.readFileSync(SSL_CRT_PATH, 'utf8');
} catch (err) {
  console.error(`Error reading certificate from ${SSL_CRT_PATH}:`, err.message);
  process.exit(1);
}

const credentials = {
  key: privateKey,
  cert: certificate,
};

// Create HTTPS server
const httpsServer = https.createServer(credentials, app);

// Start the server
const PORT = process.env.PORT || 5000;
httpsServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
