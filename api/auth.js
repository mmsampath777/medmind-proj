// api/auth.js
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Temporary in-memory user store
let users = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { action, username, email, password } = req.body;

    // Validate required fields
    if (!action || !email || !password || (action === 'signup' && !username)) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // SIGN-UP
    if (action === 'signup') {
      const exists = users.some(u => u.email === email);
      if (exists) {
        return res.status(400).json({ message: 'User already exists' });
      }
      users.push({ username, email, password });
      return res.status(200).json({ message: 'User created successfully' });
    }

    // LOGIN
    if (action === 'login') {
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        const token = jwt.sign({ email }, SECRET, { expiresIn: '1h' });
        return res.status(200).json({ token });
      } else {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    }

    return res.status(400).json({ message: 'Invalid action' });
  } else {
    // Only POST is allowed
    res.status(405).json({ message: 'Method not allowed' });
  }
}
