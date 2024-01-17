import * as controller from './controller.js';
import { Router } from 'express';

const router = Router();

router.get('/', controller.getAllRequest);


export default router;