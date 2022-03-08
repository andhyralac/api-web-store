const { request, response } = require('express');

const UserRepository = require('../repositories/user.repository');
const { verifyToken } = require('../helpers/generateToken');
const { responseError } = require('../helpers/response');


const validateToken = async (req = request, res = response, next) => {
    const token = req.header('token-app');

    if (!token) {
        return responseError(req, res, 'No ha iniciado sesión', 401, 'No viene el token en la petición');
    }

    try {
        const { uid } = await verifyToken(token);

        const user = await UserRepository.getById(uid);
        if (!user) {
            return responseError(req, res, 'Token no válido', 401, 'Token fue alterado para realizar la petición')
        }

        if (!user.status) {
            return responseError(req, res, 'Token no válido', 401, 'Usuario esta bloqueado')
        }

        req.user = user;

        next();

    } catch (error) {
        responseError(req, res, 'Falló en el servidor', 500, error);
    }
}





module.exports = {
    validateToken
}