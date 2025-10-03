import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

let conn = null;

async function connectDB() {
  if (conn) return conn;
  conn = await mongoose.connect(MONGO_URI);
  return conn;
}

const UserSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default async function handler(req, res) {
  await connectDB();

  const { method, body } = req;

  if (method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { action, username, email, password } = body;

  if (!action || !email || !password || (action === 'signup' && !username)) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  if (action === 'signup') {
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email: email.toLowerCase(), password: hashedPassword });
    await newUser.save();
    return res.status(201).json({ message: 'User created successfully' });
  }

  if (action === 'login') {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ token });
  }

  return res.status(400).json({ message: 'Invalid action' });
}
