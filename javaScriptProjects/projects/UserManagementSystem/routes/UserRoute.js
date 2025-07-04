const express = require('express');
const registerService = require('../controller/RegisterationController');
const login = require('../controller/LoginController');
const changePass = require('../controller/ChangePassController');
const forgetPass =require('../controller/ForgetPassController')
const router = express.Router();


router.post('/register', registerService);
router.post('/login', login);
router.patch('/changePass', changePass);
router.patch('/forgetPass', forgetPass);



module.exports = router;