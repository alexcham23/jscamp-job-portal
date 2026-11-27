import { Router } from 'express';
import JobController from '../controllers/job.controller.js';  
import { validateCreate, validateUpdate } from '../middlewares/validate.middleware.js'; 


const router: Router = Router();


// ========== Job Routes ==========

// GET /jobs - Listar todos los jobs
router.get('/', JobController.getAll);

// GET /jobs/:id - Obtener un job por su ID
router.get('/:id', JobController.getId);

// POST /jobs - Crear un nuevo job
router.post('/', validateCreate, JobController.create);

// PATCH /jobs/:id - Actualizar un job existente parciamente
router.patch('/:id', validateUpdate, JobController.update);

// DELETE /jobs/:id - Eliminar un job
router.delete('/:id', JobController.delete);

export default router;
