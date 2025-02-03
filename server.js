const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const session = require('express-session');
const app = express();

// Database connection (ensure to replace with your credentials)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'login_app'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

// Middleware to parse POST request data
app.use(express.urlencoded({ extended: true }));

// Session management
app.use(session({
    secret: 'secretkey', // Replace with a strong key
    resave: false,
    saveUninitialized: true
}));

// Route to render login page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route to handle login logic
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Using parameterized query to prevent SQL injection
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Database error');
        }

        if (result.length === 0) {
            return res.status(400).send('Invalid username or password');
        }

        // Check if password matches using bcrypt
        bcrypt.compare(password, result[0].password, (err, match) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error during password comparison');
            }

            if (match) {
                // Successful login, store user session
                req.session.user = result[0];
                res.send('Login successful');
            } else {
                res.status(400).send('Invalid username or password');
            }
        });
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
