const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
app.use(express.json()); // To parse JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// User model
const UserSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', UserSchema);

// Sign-up route (User Registration)
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  console.log(`Attempting to register user: ${email}`);

  // Check if user already exists, case-insensitive
  const userExists = await User.findOne({ email: email.toLowerCase() });
  if (userExists) {
    console.log('User already exists:', email);
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ username, email: email.toLowerCase(), password: hashedPassword });

  try {
    await newUser.save();
    console.log('User created:', username, email);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.log('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user' });
  }
});

// Login route (Authentication)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Serve login.html when visiting /login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Default route to serve index.html (if that's your main page)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Fallback for unhandled routes
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
