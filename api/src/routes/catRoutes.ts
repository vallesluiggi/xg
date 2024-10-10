import { Router } from 'express'; 
import { getAllCats, getCatById, getSearchCats } from '../controllers/catController';

const router = Router();

router.get('/', getAllCats); 
router.get('/search', getSearchCats);
router.get('/:id', getCatById);

export { router as catRoutes };
