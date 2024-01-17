import * as controller from './controller.js';
import { Router } from 'express';

const router = Router();

router.get('/', controller.getAllNgo);
router.get('/:id', controller.getNgoById);
router.post('/', controller.createNgo);
router.put('/:id', controller.updateNgo);
router.delete('/:id', controller.deleteNgo);

router.post('/getnearestrequests', controller.getNearestRequest)

export default router;