import * as controller from './controller.js'
import { Router } from 'express'

const router = Router()

router.get('/', controller.getAllRequests)
router.get('/:id', controller.getRequestById)
router.post('/', controller.createRequests)
router.put('/:id', controller.updateRequest)
router.delete('/:id', controller.deleteRequest)
router.put('/:id/status', controller.updateRequestStatus)

export default router
