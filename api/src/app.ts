import express from 'express';
import { json } from 'body-parser';
import { userRoutes } from './routes/userRoutes';
import { connectDB } from './config/database';
import dotenv from 'dotenv';
import { catRoutes } from './routes/catRoutes';
import { ImagesRoutes } from './routes/imagesRoutes';
import { authRoutes } from './routes/authRoutes'; 
import cors from 'cors';
dotenv.config();

const app = express();

const allowedOrigins = [
    'http://localhost:4200',
    'http://localhost:8888', 
];

const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true); 
        } else {
            callback(new Error('No permitido por CORS')); 
        }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

app.use(cors(corsOptions));

const port = process.env.NODE_DOCKER_PORT || 3000;
console.log(process.env.NODE_DOCKER_PORT);

app.use(json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/breeds', catRoutes);
app.use('/api/images', ImagesRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
