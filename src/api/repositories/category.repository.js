const BaseRepository = require('./base.repository');
const Category = require('../models/category.model');

class CategoryRepository extends BaseRepository {
    constructor() {
        super(Category);
    }

    async getAll() {
        return await this.model.find({ "available": true })
                               .populate('user', 'names');
    }
}


module.exports = new CategoryRepository;