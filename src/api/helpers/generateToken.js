const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config/default');

/**
 * Function for generate token
 * @param {*} user 
 * @returns token
 */
const tokenSign = async (user) => {
   const payload = {
      uid: user.uid,
      role: user.role
   }

   const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '6h'
   });

   return token;
}


module.exports = { tokenSign };