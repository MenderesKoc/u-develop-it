const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root61',
    database: 'election'
});


module.exports = db;