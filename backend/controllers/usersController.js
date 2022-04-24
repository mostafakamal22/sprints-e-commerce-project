const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const getUsers = asyncHandler(async (req, res) => {
  const data = await User.find()

  if (data) {
    if (data.length === 0) {
      res.status(200).json({ message: 'no users yet' })
    }
    res.status(200).json({ users: data })
  } else {
    res.status(500).json({ message: 'unknowen server or DB error' })
  }
})

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName,
    lastName,
    email,
    password,
    address,
    phone,
    type,
    status } = req.body

  if (!email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if user exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    address,
    phone,
    type,
    status,
  })

  if (user) {
    res.status(201).json({
      user,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check for user email
  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      user,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

// @desc    Delete a user
// @route   DELETE /api/users/:id
// @access  private
const deleteUser = asyncHandler(async (req, res) => {
  const id = req.params.id

  // Check for product
  const doc = await User.findById(id)

  if (doc) {
    await User.deleteOne({ _id: id })
    res.status(201).json({
      id: doc.id
    })
  } else {
    res.status(400)
    throw new Error('Invalid user id')
  }
})

// @desc    Edit a product
// @route   PUT /api/products/:id
// @access  private
const editUser = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    address,
    phone,
    type,
    status,
  } = req.body
  const id = req.params.id

  // Check for product
  const doc = await User.findById(id)

  if (doc) {
    const data = await User.findOneAndUpdate({ _id: id }, {
      firstName,
      lastName,
      email,
      password,
      address,
      phone,
      type,
      status,
    }, {
      new: true
    })
    res.status(200).json({
      updated: data
    })
  } else {
    res.status(400)
    throw new Error('Invalid user id')
  }
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  })
}

module.exports = {
  getUsers,
  registerUser,
  loginUser,
  deleteUser,
  editUser,
}
