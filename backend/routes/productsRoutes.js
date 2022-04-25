const express = require('express')

const router = express.Router()
// Get all the actions (testAPI) from the controller
const {
  getProduct,
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
} = require('../controllers/productsController')

// Protect the needed routes
const { protect } = require('../middleware/authMiddleware')

// Define all the routes for /api/users
router.get('/', getProducts)
router.post('/', addProduct)
router.get('/:id', getProduct)
router.delete('/:id', deleteProduct)
router.put('/:id', editProduct)

module.exports = router
