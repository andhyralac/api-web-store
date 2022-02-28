const { request, response } = require('express');

const { encryptPassword } = require('../helpers/encrypt.password');
const { responseError, responseSuccess } = require('../helpers/response');
const UserRepository = require('../repositories/user.repository');


class UserController {
 
    async createUser(req = request, res = response) {
        try {
            const { names, surnames, email, newPassword, nickname, address, role, img} = req.body;
            const password = encryptPassword(newPassword);
            const user = await UserRepository.create({
                names, surnames, email, password, nickname, address, role, img
            });

            responseSuccess(req, res, user, 201);

        } catch (error) {
            responseError(req, res, 'Error interno', 500, error);
        }
    }
}


module.exports = new UserController;