const { Router } = require('express');
const router = Router();

const CategoryController = require('../controllers/category.controller');
const { validateToken } = require('../middleware/validateToken');

router.post('/', validateToken,
CategoryController.createCategory);

module.exports = router;