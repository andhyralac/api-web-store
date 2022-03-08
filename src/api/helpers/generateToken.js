const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config/default');

/**
 * Function for generate token
 * @param {*} user 
 * @returns token
 */
const tokenSign = async (user) => {

   const payload = {
      uid: user._id,
      role: user.role
   }

   const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '6h'
   });

   return token;
}


/**
 * 
 * @param {string} token 
 * @returns
 */
const verifyToken = async (token) => {
   return jwt.verify(token, JWT_SECRET);
}


module.exports = { 
   tokenSign,
   verifyToken
};