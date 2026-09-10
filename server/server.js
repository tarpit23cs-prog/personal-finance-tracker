require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected')
    })
    .catch((error) => {
        console.error('MongoDB connection failed:', error.message)
    })
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Personal Finance Tracker API is running'
    })
})

app.post('/api/test', (req, res) => {
    console.log(req.body)

    res.json({
        message: 'Data received successfully',
        data: req.body
    })
})
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000')
})
