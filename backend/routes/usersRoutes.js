const express = require('express')

const router = express.Router()
// Get all the actions (testAPI) from the controller
const {
  getUsers,
  registerUser,
  loginUser,
  deleteUser,
  editUser,
} = require('../controllers/usersController')

// Protect the needed routes
const { protect } = require('../middleware/authMiddleware')

// Define all the routes for /api/users
router.get('/', getUsers)
router.post('/', registerUser)
router.post('/login', loginUser)
router.delete('/:id', deleteUser)
router.put('/:id', editUser)

module.exports = router
