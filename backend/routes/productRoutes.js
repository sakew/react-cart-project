const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById } = require('../controller/productControllers');

// route to get all products from the mongo database from /api/products, access: Public.

router.get('/', getAllProducts)

// route to get product id from the mongo database. /api/products/:id route , access: Public.

router.get('/:id', getProductById);

module.exports = router;