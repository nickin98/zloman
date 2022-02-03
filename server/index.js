require('dotenv').config()
const express = require('express')
const sequelize = require('./db/db')
require('./db/schema')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/routes')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(fileUpload({}))
app.use('/app', router)

// Обработка ошибок, последний Middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
