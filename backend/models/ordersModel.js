const mongoose = require('mongoose')

const ordersSchema = mongoose.Schema(
    {
        userID: {
            type: String,
            required: [true, 'Please add a userID'],
        },
        paymentMethod: {
            type: String,
            required: [true, 'Please add a paymentMethod'],
        },
        coupon: {
            type: String,
        },
        status: {
            type: String,
            required: [true, 'Please add a status'],
        },
        products: {
            type: [String],
            required: [true, 'Please add products'],
        },
        totalValue: {
            type: String,
            required: [true, 'Please add a totalValue'],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Orders', ordersSchema)
