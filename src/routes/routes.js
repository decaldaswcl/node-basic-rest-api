import { Router } from 'express';
import controllers from "../controllers/Controller.js";

const router = Router();

//get all products
router.get('/api/products', controllers.get);

//get products by ID
router.get('/api/products/:id', controllers.get);

//include a product
router.post('/api/products', controllers.store);

//uptade a product
router.put('/api/products/:id', controllers.update);

//delete product
router.delete('/api/products/:id', controllers.delete);

export default  router;
