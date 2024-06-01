const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', (req, res)=> {
    res.send('Welcome to home')
    console.log("hello")
})

// create a new user
router.post('/register', userController.register)
router.post('/login', userController.login)

module.exports = router;