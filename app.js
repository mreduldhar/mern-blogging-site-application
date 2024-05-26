const express =require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
// api import
const userRouter = require('./src/routes/userRouter')


// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1', userRouter)


// managing frontend routing
app.use(express.static('client/dist'))
app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})




module.exports = app;
