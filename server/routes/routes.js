const express = require('express')
const { createPatient, getAllPatients, getPatient, deletePatient, updatePatient } = require('../controllers/patientController')
const router = express.Router()

router.get('/', getAllPatients)
router.get('/:id', getPatient)
router.post('/', createPatient)
router.delete('/:id', deletePatient)
router.patch('/:id', updatePatient)
module.exports = router