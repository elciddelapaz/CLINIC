require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes/routes')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/patients', routes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`connected to db and listening to port ${process.env.PORT}`)
        })
    })
    .catch((error) => { console.log(error) })