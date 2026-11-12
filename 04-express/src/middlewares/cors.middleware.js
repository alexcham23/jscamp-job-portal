import cors from 'cors';

const AllowedOrigins = [
    'http://localhost:3000', 
    'http://localhost:1234',
    'http://localhost:5173',
];

const corsMiddleware =({acceptedOrigins = AllowedOrigins } = {}) => {
    return cors({
        origin: (origin, callback) => {
            // allow requests with no origin (like mobile apps or curl requests)
            if (acceptedOrigins.includes(origin) || !origin) {
               return callback(null, true);
            } 
            // otherwise, reject the request
            return callback(new Error('Not allowed by CORS'));
        }
    })
}

export default corsMiddleware;