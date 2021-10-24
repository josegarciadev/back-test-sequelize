import {Router} from 'express';
import { createProduct, deleteProduct, editProduct, getAllProducts, getProductById, getProductByIdCategory} from '../controllers/products.controller';

const router = Router();

router.get('/',getAllProducts);
router.get('/:id',getProductById);
router.get('/category/:id',getProductByIdCategory);

router.post('/',createProduct);
router.put('/:id',editProduct);
router.delete('/:id',deleteProduct);

export default router;