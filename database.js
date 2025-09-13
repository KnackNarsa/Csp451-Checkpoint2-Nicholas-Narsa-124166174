// database.js
// NicholasNarsa2


let dbConnected = false;
let users = [];
let nextId = 1;

const users = {
  nnarsa: 'password',
  nnarsa2: 'password'
};



function connectDB() {
    dbConnected = true;
    console.log("Database connected");
}

function disconnectDB() {
    dbConnected = false;
    console.log("Database disconnected");
}

function insertUser(data) {
    if (!dbConnected) return console.log("DB not connected");
    const user = { id: nextId++, ...data };
    users.push(user);
    console.log("Inserted user:", user);
    return user;
}

function updateUser(id, data) {
    if (!dbConnected) return console.log("DB not connected");
    const user = users.find(u => u.id === id);
    if (user) Object.assign(user, data);
    console.log("Updated user:", user);
    return user;
}

function deleteUser(id) {
    if (!dbConnected) return console.log("DB not connected");
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        const deleted = users.splice(index, 1)[0];
        console.log("Deleted user:", deleted);
        return deleted;
    }
}

function queryUsers() {
    if (!dbConnected) return [];
    return users;
}

module.exports = { connectDB, disconnectDB, insertUser, updateUser, deleteUser, queryUsers };

