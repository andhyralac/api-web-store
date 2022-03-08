const { request, response } = require('express');

const { encryptPassword } = require('../helpers/encrypt.password');
const { tokenSign } = require('../helpers/generateToken');
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

            const tokenSession = await tokenSign(user);
            responseSuccess(req, res, { token: tokenSession }, 201);

        } catch (error) {
            responseError(req, res, 'Error interno', 500, error);
        }
    }
}


module.exports = new UserController;