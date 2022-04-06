const express = require('express')

const router = express.Router()
// Get all the actions (testAPI) from the controller
const {
  testAPI,  
} = require('../controllers/userController')

// Protect the needed routes
const { protect } = require('../middleware/authMiddleware')

// Define all the routes for /api/users
router.get('/', testAPI)

module.exports = router
