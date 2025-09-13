// user-auth.js
const db = require("./database"); // Use database module

// Validate username/password format
function validateLogin(username, password) {
    if (!username || !password) return false;
    return username.length >= 3 && password.length >= 6;
}

// Login using database users
function login(username, password) {
    const users = db.queryUsers();
    if (!validateLogin(username, password)) return false;
    const user = users.find(u => u.username === username && u.password === password);
    return !!user;
}

function logout(username) {
    console.log(`Logging out ${username}`);
}

function resetPassword(username, newPassword) {
    const users = db.queryUsers();
    const user = users.find(u => u.username === username);
    if (user) user.password = newPassword;
}

module.exports = { login, logout, resetPassword };

