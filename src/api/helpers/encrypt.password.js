const bcryptjs = require('bcryptjs');

/**
 * Function to encrypt password
 * @param {string} password 
 * @returns {string} encryptedPassword
 */
const encryptPassword = (password) => {
    const salt = bcryptjs.genSaltSync();
    const passwordEncrypt = bcryptjs.hashSync(password, salt);

    return passwordEncrypt;
}

/**
 * 
 * @param {string} passwordPlain 
 * @param {string} hashPassword 
 * @returns {Boolena} comparePassword
 */
const comparePassword = (passwordPlain, hashPassword) => {
    return bcryptjs.compare(passwordPlain, hashPassword);
}


module.exports = {
    encryptPassword,
    comparePassword
}