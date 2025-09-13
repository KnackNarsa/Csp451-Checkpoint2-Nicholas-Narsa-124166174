const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const apiRoutes = require('./api');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

// Serve frontend
app.use(express.static('public'));

// API routes
app.use('/api', apiRoutes);

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
