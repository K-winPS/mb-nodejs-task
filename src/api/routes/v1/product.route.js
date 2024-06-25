const express = require('express');
const router = express.Router();
const productController = require('../../controllers/product.controller.js');

router.post('/', productController.registerProduct);
router.put('/:id/category', productController.editProductCategory);
router.get('/', productController.getAllProducts);
router.get('/filter', productController.filterProducts);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
