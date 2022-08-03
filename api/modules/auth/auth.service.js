const UsersService = require('../users/users.service');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");



module.exports.register = async (data) => {
    const user = await UsersService.findUserByEmail(data.email)
    if (user) {
      return 'This user is already registered';
    }
    const password = bcrypt.hashSync(data.password, 8)
    return  UsersService.signUpUser(data, password );
}


module.exports.registerAgent = async (data) => {
    const user = await UsersService.findUserByEmail(data.email)
    if (user) {
      return 'This user is already registered';
    }
    const password = bcrypt.hashSync(data.password, 8)
    return  UsersService.signUpAgent(data, password );
}

module.exports.login = async ({ email, password }) => {
    let user = await UsersService.findUserByEmail(email)
    if (!user) {
      return 'User Not found.';
    }
    let passwordIsValid = bcrypt.compareSync(password, user.password);

    if(!passwordIsValid) {
     return 'Invalid Password!';
    } else {
        user = { ...user.toObject()};
        delete user.password;
        const token = jwt.sign(user, 'E-mairie', { expiresIn: 60 * 60 });
        return { user, token };
    }
}

module.exports.verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, 'E-mairie', (error, decoded) => {
            if(error) {
                reject(error);
            } else {
                resolve(decoded);
            }
        })
    })
}
