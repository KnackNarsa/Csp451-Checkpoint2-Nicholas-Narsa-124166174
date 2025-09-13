// login.js

const { getUser, updateUserPassword } = require('./database');

// Login function
function login(username, password) {
  const storedPassword = getUser(username);
  return storedPassword === password;
}

// Logout function
function logout(username) {
  console.log(`${username} logged out`);
}


// Check if user exists
function isUserExists(username) {
  return getUser(username) !== undefined;
}


module.exports = { login, logout, resetPassword, isUserExists };

