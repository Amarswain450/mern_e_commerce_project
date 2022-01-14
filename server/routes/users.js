const express = require('express');
const router = express.Router();
const {registerController} = require('../controllers/user_controllers');
const {registerValidate} = require('../validations/user_validation');

router.post('/register', registerValidate, registerController);

module.exports = router;