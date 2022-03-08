const { request, response } = require('express');

const CategoryRepository = require('../repositories/category.repository');
const { responseError, 
        responseSuccess } = require('../helpers/response');



class CategoryController {

    async createCategory(req = request, res = response) {
        try {
            const data = {
                name: req.body.name,
                user: req.user._id
            }

            const category = await CategoryRepository.create(data);
            responseSuccess(req, res, category, 201);

        } catch (error) {
            responseError(req, res, 'Error interno', 500, error);
        }
    }
}

module.exports = new CategoryController;