const express = require('express');
const cors = require('cors');
const { LocalStorage } = require('node-localstorage');
const app = express();
const PORT = 5000;

// Create a local storage instance (similar to browser localStorage)
const localStorage = new LocalStorage('./scratch');

// Middleware
app.use(cors());
app.use(express.json());

// Route to handle login
app.post('/login', (req, res) => {
    const { name, contact, email, password } = req.body;

    if (!name || !contact || !email || !password) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    // Create a new user object to be saved
    const user = { name, contact, email, password, loginTime: new Date() };

    // Save the user data in localStorage
    localStorage.setItem(email, JSON.stringify(user));

    console.log('User data saved:', user);
    res.json({ message: 'Login successful', user });
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});