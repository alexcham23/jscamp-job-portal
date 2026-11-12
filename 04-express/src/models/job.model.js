import jobs from '../../jobs.json' with { type: 'json' };

class JobModel {
    static async getAll({ text, title, limit, technology, offset }) {
        let filteredJobs = jobs;

        if (text) {
            filteredJobs = filteredJobs.filter(job =>
                job.titulo.toLowerCase().includes(text.toLowerCase()) || job.descripcion.toLowerCase().includes(text.toLowerCase()));
        }

        if (technology) {
            filteredJobs = filteredJobs.filter(job =>
                job.data.technology.some(tech => tech.toLowerCase() === technology.toLowerCase()));
        }

        const limitNumber = Number(limit);
        const offsetNumber = Number(offset);

        const paginatedJobs = filteredJobs.slice(offsetNumber, offsetNumber + limitNumber);

        return paginatedJobs;
    }

    static async getById(id) {
        const job = jobs.find(job => job.id === id)
        return job
    }

    static async create({ titulo, empresa, ubicacion, data }) {
        const newJob = {
            id: crypto.randomUUID(),
            titulo,
            empresa,
            ubicacion,
            data
        }

        jobs.push(newJob) // lo haremos en una base de datos con un INSERT

        return newJob
    }
}

export default JobModel;