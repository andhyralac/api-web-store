const BaseRepository = require('./base.repository');
const User = require('../models/user.models');

class UserRepository extends BaseRepository {
    constructor() {
        super(User);
    }
}


module.exports = new UserRepository;