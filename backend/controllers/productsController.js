// Generate a token to auth users
const jwt = require('jsonwebtoken')
// Create hashed password to be saved in DB
const bcrypt = require('bcryptjs')
// Handle the async requests to the API
const asyncHandler = require('express-async-handler')

const Product = require('../models/productsModal')

// @desc    get all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
    const data = await Product.find()
    if (!data) {
        res.status(500).json({ message: 'server error please try again' })
        return
    }
    if (data.length === 0) {
        res.status(200).json({ message: 'no products yet!' })
    } else {
        res.status(200).json({ message: data })
    }
})

// @desc    Add new product
// @route   POST /api/products
// @access  private
const addProduct = asyncHandler(async (req, res) => {
    const { category, images, age, pieces, isFeatured, features, highlights, details, name, price, brand, tags } = req.body
    const newProduct = {
        category,
        images,
        age,
        pieces,
        isFeatured,
        features,
        highlights,
        details,
        name,
        price,
        brand,
        reviews: [],
        tags,
    }

    // check for missing fields
    const check = Object.keys(newProduct).filter(k => !newProduct[k])
    if (check.length > 0) {
        res.status(400).json({ message: 'missing fields', field: check })
        return
    }

    // check if product exists
    const exists = await Product.findOne({ name: newProduct.name })
    if (exists) {
        res.status(400).json({ message: 'already exists' })
    }

    // create the product
    try {
        const data = await Product.create(newProduct)
        res.status(201).json(data)
    } catch (err) {
        res.status(401)
        res.json(err)
    }
})

// @desc    Remove a product
// @route   DELETE /api/products/:id
// @access  private
const deleteProduct = asyncHandler(async (req, res) => {
    const id = req.params.id

    // Check for product
    const doc = await Product.findById(id)

    if (doc) {
        await Product.deleteOne({ _id: id })
        res.status(201).json({
            id: doc.id
        })
    } else {
        res.status(400)
        throw new Error('Invalid product id')
    }
})

// @desc    Edit a product
// @route   PUT /api/products/:id
// @access  private
const editProduct = asyncHandler(async (req, res) => {
    const { category, images, age, pieces, isFeatured, features, highlights, details, name, price, brand, tags } = req.body
    const id = req.params.id

    // Check for product
    const doc = await Product.findById(id)

    if (doc) {
        const data = await Product.findOneAndUpdate({ _id: id }, {
            category,
            images,
            age,
            pieces,
            isFeatured,
            features,
            highlights,
            details,
            name,
            price,
            brand,
            tags,
        }, {
            new: true
        })
        res.status(200).json({
            updated: data
        })
    } else {
        res.status(400)
        throw new Error('Invalid product id')
    }
})

module.exports = {
    getProducts,
    addProduct,
    deleteProduct,
    editProduct,
}