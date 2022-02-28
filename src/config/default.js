if (process.env.NODE_ENV !== 'production') {
    if (process.env.NODE_ENV === 'test') {
    
        require('dotenv').config({ path: 'test.env' });
    
    } else {

        require('dotenv').config();

    }
}

module.exports = {
    PORT: process.env.PORT || 3000,
    DB_URI_MONGO: process.env.DB_URI,
    JWT_SECRET: process.env.JWT_SECRET
}