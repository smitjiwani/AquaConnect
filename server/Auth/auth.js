import { Router } from 'express';
const router = Router();
import db from '../db/db.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

router.get('/login', (req, res) => {
  res.send('Hello from auth');
});

router.post('/register', async (req, res) => {

  const { username, email, password, role, phone, address, location } = req.body;

  try {
    let user;
    let success = true;

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);

    if (role === 'user') {
      user = await db('users').insert({ name: username, email: email, password: secPass, phone: phone, location: location, address: address }).returning('*');
    } else if (role === 'ngo') {
      user = await db('ngos').insert({ name: username, email: email, password: secPass, phone: phone, location: location, address: address }).returning('*');
    }
    console.log(user)

    const authtoken = jwt.sign(user, process.env.JWT_SECRET)

    res.json({success, authtoken});
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password, role } = req.body;

  try {
    let user;
    let success = false
    if (role === 'user') {
      user = await db('users').where({ email: email }).first();
    } else if (role === 'ngo') {
      user = await db('ngos').where({ email: email }).first();
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (user && passwordCompare) {
      const authtoken = jwt.sign(user, process.env.JWT_SECRET)
      success = true
      res.status(200).json({success, authtoken});
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
    console.error('Login error:', error);
  }
});

export default router;