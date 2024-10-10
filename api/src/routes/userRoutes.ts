import { Router } from 'express';
import { createUser, getUserById } from '../controllers/userController';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';

const router = Router();

router.get('/', [AuthMiddleware], getUserById);

export { router as userRoutes };
