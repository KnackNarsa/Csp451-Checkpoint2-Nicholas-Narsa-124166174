const express = require('express');
const router = express.Router();
const { getUser, addUser, updateUserPassword } = require('./database');

// Login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const storedPassword = getUser(username);

    if (storedPassword && storedPassword === password) {
        req.session.user = { username };
        res.json({ success: true, user: { username } });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
});

// Logout
router.post('/logout', (req, res) => {
    req.session.destroy();
    res.json({ success: true });
});

// Session check
router.get('/session', (req, res) => {
    if (req.session.user) res.json({ loggedIn: true, user: req.session.user });
    else res.json({ loggedIn: false });
});

module.exports = router;
