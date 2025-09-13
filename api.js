// api.js
// NicholasNarsa3
const express = require("express");
const db = require("./database");
const app = express();
app.use(express.json());

db.connectDB(); // Ensure database is connected

// Get all users
app.get("/users", (req, res) => {
    res.json(db.queryUsers());
});


// Get user by ID
app.get("/users/:id", (req, res) => {
    const users = db.queryUsers();
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send("User not found");
    res.json(user);
});

// Post create user
app.post("/users", (req, res) => {
    const user = db.insertUser(req.body);
    res.status(201).json(user);
});

// Put update user
app.put("/users/:id", (req, res) => {
    const user = db.updateUser(parseInt(req.params.id), req.body);
    if (!user) return res.status(404).send("User not found");
    res.json(user);
});

// Delete user
app.delete("/users/:id", (req, res) => {
    const deleted = db.deleteUser(parseInt(req.params.id));
    if (!deleted) return res.status(404).send("User not found");
    res.json(deleted);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

