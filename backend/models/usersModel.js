const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'please add first name']
        },
        lastName: {
            type: String,
            required: [true, 'please add last name']
        },
        email: {
            type: String,
            required: [true, 'please add email']
        },
        password: {
            type: String,
            required: [true, 'please add password']
        },
        address: {
            type: String,
            required: [true, 'please add address']
        },
        phone: {
            type: String,
            required: [true, 'please add phone']
        },
        type: {
            type: String,
            required: [true, 'please add user type']
        },
        status: {
            type: String,
            required: [true, 'please add user status']
        },
        cartItems: {
            type: Array,
        },
        wishlistItems: {
            type: Array,
        },
        orders: {
            type: Array,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Users', UserSchema)