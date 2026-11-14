import { Router } from 'express';
import JobController from '../controllers/job.controller.js';  
import { validateCreate, validateUpdate } from '../middlewares/validate.middleware.js'; 


const router = Router();

router.get('/', JobController.getAll);
router.get('/:id', JobController.getId);
router.post('/', validateCreate, JobController.create);
router.put('/:id', validateUpdate, JobController.update);
router.patch('/:id', JobController.partialUpdate);
router.delete('/:id', JobController.delete);

export default router;
