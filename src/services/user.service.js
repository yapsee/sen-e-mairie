const User = require("../schemas/user.schema");

module.exports.createUser = async (user) => User.create(user);

module.exports.updateUser = async (_id,user) => User.findByIdAndUpdate({ _id},{
    $set: {...user, _id}
});

module.exports.findUsers = async () => User.find();

module.exports.findOneUser = async (_id) => User.findOne({_id});

module.exports.deleteOneUser = async (_id) => User.findOneAndDelete({_id});

module.exports.login = async email => UserModel.findOne({email});
