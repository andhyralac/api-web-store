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

    /**
     * function to get all categories
     * @param {*} req  
     * @param {*} res 
     */
    async getAllCategory(req = request, res = response) {
        try {
            
            const categories = await CategoryRepository.getAll();
            responseSuccess(req, res, categories, 200);

        } catch (error) {
            responseError(req, res, 'Error interno al obtener las categorias', 500, error);
        }
    } 

    /**
     * Function to get category by id
     * @param {*} req
     * @param {*} res 
     */
    async getCategoryById(req = request, res = response) {
        try {
            const { id } = req.params;

            const category = await CategoryRepository.getById(id);
            responseSuccess(req, res, category, 200);

        } catch (error) {
            responseError(req, res, 'Error interno al obtener la categoria', 500, error);
        }
    }


}

module.exports = new CategoryController;