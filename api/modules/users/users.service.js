const User = require('./users.schema');

module.exports.signUpUser = async (userparams, cryptedpass) => { 
  const user = {...userparams, password: cryptedpass,  role: 'USER'};
  const result = await User.create(user);
  return result;

}

module.exports.findUserByEmail = async (email) => {
  const user = await User.findOne({email: email});
  return user

}

module.exports.signUpAgent = async (userparams, cryptedpass) => { 
  const user = {...userparams, password: cryptedpass, role: 'AGENT'};
  const result = await User.create(user);
  return result;

}