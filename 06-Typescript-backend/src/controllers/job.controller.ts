import { Request, Response } from 'express';
import { DEFAULTS } from '../config.js';
import JobModel from '../models/job.model.js';

class JobController {

    static async getAll(req: Request, res: Response) {
        const { text, title,level ,limit = DEFAULTS.LIMIT_PAGINATION, technology, offset = DEFAULTS.LIMIT_OFFSET } = req.query;
        // Simulate an API call to fetch all jobs
        const jobs = await JobModel.getAll({ text, title, level, limit, technology, offset });

        const limitNumber = Number(limit);
        const offsetNumber = Number(offset);

        // Return the jobs as a JSON response

        res.status(200).json({ result: jobs.result.length, limit: limitNumber, offset: offsetNumber, total: jobs.total , data: jobs.result });
    }

    static async getId(req: Request, res: Response) {
        const { id } = req.params

        const job = await JobModel.getById(id)

        if (!job) {
            return res.status(404).json({ error: 'Job not found' })
        }

        return res.json(job)
    }

    static async create(req: Request, res: Response) {
        const { titulo, empresa, ubicacion, data } = req.body
        const newJob = await JobModel.create({ titulo, empresa, ubicacion, data })

        return res.status(201).json(newJob)
    }

    static async update(req: Request, res: Response) { }
    static async partialUpdate(req: Request, res: Response) { }
    static async delete(req: Request, res: Response) { }
}

export default JobController;