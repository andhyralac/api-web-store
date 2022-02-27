const mongoose = require('mongoose');

const { DB_URI_MONGO } = require('./default');

const dbConnect = async () => {
    const DB_URI = DB_URI_MONGO;

    try {
        await mongoose.connect(DB_URI);
        console.log('**** SUCCESSFUL CONNECTION ****');
    } catch (error) {
        console.log('**** CONNECTION ERROR ****');
    }
}

module.exports = { dbConnect }