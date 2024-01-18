import { Router } from 'express';
const router = Router();
import db from '../db/db.js';
import jwt from 'jsonwebtoken'

const JWT_SECRET = "5f4b50a65065027be65580a99edcfdafcf432098e88b4bed93073db34bcb18d5"

router.get('/login', (req, res) => {
  res.send('Hello from auth');
});

router.post('/register', async (req, res) => {

  const { username, email, password, role, phone, address } = req.body;
  console.log(process.env.JWT_SECRET)

  try {
    let user;
    if (role === 'user') {
      user = await db('users').insert({ username: username, email: email, password: password, phone: phone, address: address }).returning('*');
    } else if (role === 'ngo') {
      user = await db('ngos').insert({ username: username, email: email, password: password, phone: phone, address: address }).returning('*');
    }
    console.log(user)
    
    const authtoken = jwt.sign({user: user}, JWT_SECRET)
    res.status(201).json({
      authtoken: authtoken,
      status: 'success'
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password, role } = req.body;

  try {
    let user;
    if (role === 'user') {
      user = await db('users').where({ email: email }).first();
    } else if (role === 'ngo') {
      user = await db('ngos').where({ email: email }).first();
    }
    console.log(user)

    const authtoken = jwt.sign({user: user}, JWT_SECRET)
    if (user && user.password === password) {
      res.status(200).json({
        authtoken: authtoken,
        status: 'success'
      });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
    console.error('Login error:', error);
  }
});

export default router;