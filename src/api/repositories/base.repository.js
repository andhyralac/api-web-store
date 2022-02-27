class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async get(args = {}) {
        return await this.model.find(args);
    }

    async getOne(args = {}) {
        return await this.model.findOne(args);
    }

    async getById(id) {
        return await this.model.findById(id);
    }

    async create(entity) {
        const createDocument =  new this.model(entity);
        return await createDocument.save();
    }

    async update(id, entity = {}) {
        return await this.model.findByIdAndUpdate(id, entity, { new: true });
    }

    async delete(id, entity = {}) {
        return await this.model.findByIdAndUpdate(id, entity, { new: true });
    }

}

module.exports = BaseRepository;