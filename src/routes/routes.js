const express = require('express');
const router = express.Router();
const Controller = require("../controllers/Controller.js");


//get all products
router.get('/api/products', Controller.get);

//get products by ID
router.get('/api/products/:id', Controller.get);

//include a product
router.post('/api/products', Controller.store);

//uptade a product
router.put('/api/products/:id', Controller.update);

//delete product
router.delete('/api/products/:id', Controller.delete);

module.exports =  router;
