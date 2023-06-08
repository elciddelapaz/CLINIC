const express = require('express')
const { createPatient, getAllPatients, getPatient, } = require('../controllers/patientController')
const router = express.Router()

router.get('/', getAllPatients)
router.get('/:id', getPatient)
router.post('/', createPatient)
router.delete('/:id', (req, res) => {
    res.json({ msg: "DELETE new workout" })
})
router.patch('/:id', (req, res) => {
    res.json({ msg: "UPDATE new workout" })
})
module.exports = router