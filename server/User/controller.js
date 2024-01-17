import db from '../db/db.js';
import { Router } from 'express';

const router = Router();

export const getAllUser = async (req, res) => {
    try {
        const users = await db('users').select('*');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        console.error('Login error:', error);
    }
};

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await db('users').where({ id: id }).first();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        console.error('Login error:', error);
    }
};  

export const createUser = async (req, res) => {
    const { name, email, password, phone } = req.body;
    try {
        const user = await db('users').insert({ name: name, email: email, password: password, phone: phone }).returning('*');
        console.log(user)
        res.status(201).json(user);
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, phone } = req.body;
    try {
        const user = await db('users').where({ id: id }).update({ name: name, email: email, password: password, phone: phone }).returning('*');
        console.log(user)
        res.status(201).json(user);
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await db('users').where({ id: id }).del();
        console.log(user)
        res.status(201).json(user);
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

export default router;