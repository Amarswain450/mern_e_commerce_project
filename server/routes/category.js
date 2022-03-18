const express = require('express');
const router = express.Router();
const categoryValidation = require('../validations/category_validations');
const categoryController = require('../controllers/category_controllers');
const authorizationService = require('../services/authorizationService');

router.post('/create-category', [categoryValidation, authorizationService.authorized], categoryController.create);
router.get('/categories/:page', authorizationService.authorized, categoryController.categories);
router.get('/update-category/:id', authorizationService.authorized, categoryController.fetchParticularCategory);

module.exports = router;