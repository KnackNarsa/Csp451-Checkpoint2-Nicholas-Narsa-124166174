// database.js
// NicholasNarsa2



const users = {
  nnarsa: 'password',
  nnarsa2: 'password'
};


// Get a user's password
function getUser(username) {
  return users[username];
}

// Add a new user
function addUser(username, password) {
  if (users[username]) return false; // user exists
  users[username] = password;
  return true;
}

// Update a user's password
function updateUserPassword(username, newPassword) {
  if (!users[username]) return false; // user doesn't exist
  users[username] = newPassword;
  return true;
}

module.exports = { getUser, addUser, updateUserPassword };
