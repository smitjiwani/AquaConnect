import * as Controller from './controller.js';
import { Router } from 'express';

const router = Router();

router.get('/', Controller.getAllIssue);    


export default router;

