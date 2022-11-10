const express = require('express');
const { getProductsController, getProductsControllerById, postProductsController, putProductsController, deleteProductsController} = require('../controllers/productsController')

const routerProductos = express.Router()
routerProductos.get('/', getProductsController)
routerProductos.get('/:id', getProductsControllerById)
routerProductos.post('/', postProductsController)
routerProductos.put('/:id', putProductsController)
routerProductos.delete('/:id', deleteProductsController)

exports.routerProductos = routerProductos