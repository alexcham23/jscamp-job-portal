import jobsRouter from './jobs.route.js';

const routers = {
    '/jobs': jobsRouter
};

const registerRoutes = (app) => {
    Object.entries(routers).forEach(([path, router]) => {
        app.use(path, router);
    });
};

export default registerRoutes;