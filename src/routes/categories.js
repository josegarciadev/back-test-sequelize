import {Router} from 'express';
import { createCategory,getAllCategories,getCategoryById,deleteCategory,editCategory} from '../controllers/category.controller';

const router = Router();

router.get('/',getAllCategories);
router.get('/:id',getCategoryById);
router.post('/',createCategory);
router.put('/:id',editCategory);
router.delete('/:id',deleteCategory);
export default router;