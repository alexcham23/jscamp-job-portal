import express, {type Express} from 'express';
import registerRoutes from './routes/index.route.js';
import corsMiddleware from './middlewares/cors.middleware.js'; 
import { DEFAULTS } from './config.js';

const PORT = process.env.PORT || DEFAULTS.PORT;

const app: Express = express();
app.set('port', PORT);

// Use the CORS middleware
app.use(corsMiddleware());

// Middleware to parse JSON request bodies
app.use(express.json());

// Register routes
registerRoutes(app);

export default app;