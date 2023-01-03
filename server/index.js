const express = require("express");
const imageRoutes = require('./routes/image.js')
const cors = require("cors")

require("dotenv").config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
//Routing
app.use('/image', imageRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))
