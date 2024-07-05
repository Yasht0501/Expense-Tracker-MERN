const express = require('express');
const { adminLoginController, adminRegisterController } = require('../controllers/adminController');

//router object
const router = express.Router()

//routers
//POST || LOGIN
router.post('/admin_login', adminLoginController)

//POST || REGISTER
router.post('/admin_register', adminRegisterController)

module.exports = router