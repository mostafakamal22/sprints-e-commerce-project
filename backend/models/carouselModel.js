const mongoose = require('mongoose')

const carouselSchema = mongoose.Schema(
    {
        imageURL: {
            type: String,
        },
        productURL: {
            type: [String],
            required: [true, 'Please add a product'],
            unique: true,
        },
        isActive: {
            type: Boolean,
            required: [true, 'Please add isActive'],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Carousel', carouselSchema)
