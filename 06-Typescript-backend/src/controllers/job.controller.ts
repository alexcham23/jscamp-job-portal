import { Request, Response } from 'express';
import type { JobFilters } from '../types.js';
import JobModel from '../models/job.model.js';

class JobController {

    // GET /jobs - Listar todos los jobs
    static async getAll(req: Request<{}, {}, JobFilters>, res: Response): Promise<void> {
        const { tech, modality, level } = req.query;
        const jobs = await JobModel.getAll({ tech, modality, level });
        res.status(200).json(jobs);
    }

    // GET /jobs/:id - Obtener un job por su ID
    static async getId(req: Request<{ id: string }>, res: Response): Promise<void> {
        const { id } = req.params;
        const job = await JobModel.getById(id);

        if (!job) {
            res.status(404).json({ message: 'Job not found' });
            return;
        }

        res.json(job);
    }

    // POST /jobs - Crear un nuevo job
    // El middleware validateCreate se encarga de validar los datos antes de llegar a este controlador
    static async create(req: Request, res: Response): Promise<void> {
        const NewJob = await JobModel.create(req.body);
        res.status(201).json(NewJob);
    }

    // PATCH /jobs/:id - Actualizar un job existente parcialmente
    // El middleware validateUpdate se encarga de validar los datos antes de llegar a este controlador              
    static async update(req: Request<{ id: string }>, res: Response): Promise<void>  {
        const { id } = req.params;
        const updatedJob = await JobModel.update(id, req.body);

        if (!updatedJob) {
            res.status(404).json({ message: 'Job not found' });
            return;
        }

        res.json(updatedJob);
    }
    
    // DELETE /jobs/:id - Eliminar un job
    static async delete(req: Request<{id: string}>, res: Response) : Promise<void> { 
        const { id } = req.params;
        const deletedJob = await JobModel.delete(id);

        if (!deletedJob) {
            res.status(404).json({ message: 'Job not found' });
            return;
        }

        res.status(204).send();
    }
}

export default JobController;