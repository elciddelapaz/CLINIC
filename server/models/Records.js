const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recordSchema = new Schema({
    procedure: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
},{timestamps: true})

module.exports = mongoose.model('Record', recordSchema)