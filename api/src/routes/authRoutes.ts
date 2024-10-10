import { Router } from 'express';
import { createUser, login } from '../controllers/userController';

const router = Router();

router.post('/login', login);
router.post('/register', createUser);

export { router as authRoutes };
