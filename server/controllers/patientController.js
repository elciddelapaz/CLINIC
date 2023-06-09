const Patient = require('../models/Patient')
const mongoose = require('mongoose')
//get all patients
const getAllPatients = async (req, res) => {
    const patients = await Patient.find({}).sort({ createdAt: -1 })
    res.status(200).json(patients)
}
//get patient
const getPatient = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Patient does not exist" })
    }
    const patient = await Patient.findById(id)
    if (!patient) {
        return res.status(404).json({ error: "Patient does not exist" })
    }

    res.status(200).json(patient)
}
//create patient
const createPatient = async (req, res) => {
    const { name, address, birthday } = req.body
    try {
        const patient = await Patient.create({ name, address, birthday })
        res.status(200).json(patient)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
//delete patient
const deletePatient = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Patient does not exist" })
    }
    const patient = await Patient.findOneAndDelete({ _id: id })
    if (!patient) {
        return res.status(404).json({ error: "Patient does not exist" })
    }

    res.status(200).json(patient)
}
//update patient
const updatePatient = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Patient does not exist" })
    }
    const patient = await Patient.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!patient) {
        return res.status(404).json({ error: "Patient does not exist" })
    }

    res.status(200).json(patient)
}

module.exports = {
    createPatient,
    getAllPatients,
    getPatient,
    deletePatient,
    updatePatient
}