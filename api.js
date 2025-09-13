const express = require('express');
const { login, resetPassword } = require('./login'); // import from login.js
const router = express.Router();

// Login 
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (login(username, password)) {
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid username or password');
  }
});

// Reset password
router.post('/reset-password', (req, res) => {
  const { username, newPassword } = req.body;
  if (resetPassword(username, newPassword)) {
    res.send('Password updated successfully');
  } else {
    res.status(400).send('User not found');
  }
});

module.exports = router;

