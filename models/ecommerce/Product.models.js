import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    productImage: {
        type: String,
    },
    price: {
        type: Number,
        required:true,
        default: 0,
    },
    stock:{
        default: 1,
        type: Number,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true,
    }
} , {
    timestamps: true,
})


export const Product = mongoose.model('Product' , productSchema)