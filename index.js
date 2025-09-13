const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./api'); // api.js routes

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Serve static frontend files
app.use(express.static('public'));

// Use API routes for login/reset-password
app.use('/api', apiRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
