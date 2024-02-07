const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)
