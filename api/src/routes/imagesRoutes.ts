import { Router } from 'express';
import { getFilterByCats } from '../controllers/ImagenesController';

const router = Router();

router.get('/:id', getFilterByCats);

export { router as ImagesRoutes };
