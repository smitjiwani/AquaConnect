import db from '../db/db.js';
import { Router } from 'express';

const router = Router();

export const getAllRequest = async (req, res) => {
    try {
        const requests = await db('requests').select('*');
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        console.error('Login error:', error);
    }
};
