import { Application, Request, Response } from 'express';
import jobsRouter from './job.route.js';

const routers = {
    '/jobs': jobsRouter
};

const registerRoutes = (app: Application): void => {
    Object.entries(routers).forEach(([path, router]) => {
        app.use(path, router);
    });

    app.get('/', (req: Request, res: Response) => {
        res.status(200).json({ message: 'Welcome to the API' });
    });

    app.use((req: Request, res: Response) => {
        res.status(404).json({
            error: 'Not Found',
            path: req.originalUrl
        });
    });
};

export default registerRoutes;