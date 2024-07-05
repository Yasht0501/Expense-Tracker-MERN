const express = require('express');
const { loginController, registerController, getAllUsers } = require('../controllers/userController');

//router object
const router = express.Router()

//routers
//POST || LOGIN
router.post('/login', loginController)

//POST || REGISTER
router.post('/register', registerController)

//get users
router.get("/get-users", getAllUsers)

module.exports = router