const express = require('express');
const router = express.Router();
const categoryValidation = require('../validations/category_validations');
const categoryController = require('../controllers/category_controllers');

router.post('/create-category', categoryValidation, categoryController.create);

module.exports = router;