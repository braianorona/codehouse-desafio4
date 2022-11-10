const crypto = require('crypto');

const products = []

function onRange(price, min = 0, max = 1000000) {
  return price >= min && price <= max;
}

function getProductsController(req, res) {
  let result;
  if(req.query.min || req.query.max) {
    result = products.filter(({ price }) => onRange(price, req.query.min, req.query.max))
  } else {
    result = products
  }
  res.json(result)
}

function getProductsControllerById(req, res) {
  const { id } = req.params
  const productFoud = products.find(product => product.id === id);
  if (!productFoud) {
    res.status(404).json({ error: 'producto no encontrado' })
  } else {
    res.json(productFoud)
  }
}

function postProductsController(req, res) {
  const newProduct = req.body;
  newProduct.id = crypto.randomUUID()
  products.push(newProduct)
  res.status(201).json(newProduct)
}

function putProductsController(req, res) {
  const { id } = req.params
  const index = products.findIndex(product => product.id === id)
  if(index === -1) {
    res.status(404).json({ error: 'producto no encontrado' })
  } else {
    products[index] = req.body
    res.json(req.body)
  }
}

function deleteProductsController(req, res) {
  const { id } = req.params
  const index = products.findIndex(product => product.id === id)
  if(index === -1) {
    res.status(404).json({ error: 'producto no encontrado' })
  } else {
    const deleted = products.splice(index, 1)
    res.json(deleted[0])
  }
}

exports.getProductsController = getProductsController
exports.getProductsControllerById = getProductsControllerById
exports.postProductsController = postProductsController
exports.putProductsController = putProductsController
exports.deleteProductsController = deleteProductsController
