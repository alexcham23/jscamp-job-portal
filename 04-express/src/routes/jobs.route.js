import { Router } from 'express';
import JobController from '../controllers/Job.controller.js';   


const router = Router();

router.get('/', JobController.getAll);
router.get('/:id', JobController.getId);
router.post('/', JobController.create);
router.put('/:id', JobController.update);
router.patch('/:id', JobController.partialUpdate);
router.delete('/:id', JobController.delete);

export default router;
