import db from '../db/db.js'; 
import { Router } from 'express';

const router = Router();

export const getAllIssue = async (req, res) => {
    try {
        const issues = await db('issues').select('*');
        res.status(200).json(issues);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        console.error('Login error:', error);
    }
};