const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters"]
    },
    price:{
        type: Number,
        min: [0, "Must have a rating"],
        max: [1000000000, "Max price is high"]
    },
    description:{
        type:String,
        required: [true, "Title is required"],
        minlength: [10, "Must inclease a brief description"]
    }

}, {timestamps: true})

module.exports.Product = mongoose.model("Product", ProductSchema)