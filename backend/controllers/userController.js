// Generate a token to auth users
const jwt = require('jsonwebtoken')
// Create hashed password to be saved in DB
const bcrypt = require('bcryptjs')
// Handle the async requests to the API
const asyncHandler = require('express-async-handler')

// @desc    test the API
// @route   GET /api/users
// @access  Public
const testAPI = (req, res) => {
  res.status(200).json({ message: 'API works' })
}

module.exports = {
  testAPI,
}
