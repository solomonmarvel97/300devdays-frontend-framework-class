const express = require('express')
const app = express()
const { Response, QRCodeGenerator, Validate } = require('./utils/helper')

const { employeeRegistrationSchema } = require('./schema')

const port = 3000

app.use(express.json())

// endpoints / routes
app.get('/', (req, res) => {
    res.status(200).json(Response(true, "server is reachable 🔥"))
})


app.post('/register', async (req, res) => {
    try {
        Validate(employeeRegistrationSchema, req.body)
        const response = QRCodeGenerator(req.body) // generate qrcode
        if (response) {
            res.status(200).json(Response(true, "success generating qrcode"))
        } else {
            res.status(500).json(Response(false, "success generating qrcode"))
        }
    } catch (err) {
        res.status(500).json(Response(false, err.message))
    }
})

app.listen(port, () => {
    console.log(`Our App is running on port ${port}`)
})