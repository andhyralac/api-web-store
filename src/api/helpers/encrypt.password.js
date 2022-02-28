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

module.exports = {
    encryptPassword
}