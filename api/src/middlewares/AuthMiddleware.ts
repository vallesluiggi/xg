import { Request, Response, NextFunction, RequestHandler } from 'express';
 
declare module 'express-serve-static-core' {
    interface Request {
        user?: any;
    }
}
import jwt from 'jsonwebtoken';
 
export const AuthMiddleware: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        res.status(403).json({ message: 'No token provided' });
    }

    try {
        if (!process.env.JWT_SECRET) {
            res.status(500).json({ message: 'JWT secret is not defined' });
            return;
        }
        const decoded = jwt.verify(token as string, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
