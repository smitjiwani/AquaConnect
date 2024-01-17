import {Router} from 'express';
import * as controller from './controller.js';

const router = Router();

router.get('/', controller.getAllUser);
router.get('/:id', controller.getUserById);
router.post('/', controller.createUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

export default router;