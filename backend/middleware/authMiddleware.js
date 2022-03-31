const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

// Used to protect the needed routes of the server
const protect = asyncHandler(async (req, res, next) => {
  console.log('route is protected!')
})

module.exports = { protect }
