const mongoose = require('mongoose')

const Schema = mongoose.Schema

const patientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Patient', patientSchema)