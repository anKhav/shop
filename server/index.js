require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')
const cookieParser = require('cookie-parser')

const sequelize = require('./db')
const router = require('./routes/index')
const errorHandler = require('./middlewares/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 7000

const app = express()


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.static(path.resolve(__dirname,'..', '..', 'client','public', 'img')))
app.use(fileUpload({}))
app.use('/api', router)


app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Sever started on port:${PORT}`)
        })
    } catch (e){
        console.log(e);
    }
}
start()

