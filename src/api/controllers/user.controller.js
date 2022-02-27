const UserRepository = require('../repositories/user.repository');

const { responseError, 
        responseSuccess } = require('../helpers/response');


class UserController {
    constructor() {
        this._repository = UserRepository;
    }

    async createUser(req, res) {

    }
}

module.exports = new UserController;