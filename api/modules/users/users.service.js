const User = require('./users.schema');

module.exports.signUpUser = async (userparams, cryptedpass) => { 
  const user = {...userparams, password: cryptedpass};
  const result = await User.create(user);
  return result;

}

module.exports.findUserByEmail = async (email) => {
  const user = await User.findOne({email: email});
  return user

}