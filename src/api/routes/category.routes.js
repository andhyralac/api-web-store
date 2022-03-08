const { Router } = require('express');
const router = Router();

const CategoryController = require('../controllers/category.controller');
const { validateToken } = require('../middleware/validateToken');

router.post('/', validateToken,
CategoryController.createCategory);

// router for get all the categories
router.get('/', validateToken, CategoryController.getAllCategory);


// router for get category by id
router.get('/:id', validateToken, CategoryController.getCategoryById);




module.exports = router;