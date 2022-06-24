const UserService = require("./../services/user.service");
const User = require("./../schemas/user.schema");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const {TOKEN_TTL,TOKEN_SECRET} = process.env;

const createToken = (user) => {
    return jwt.sign(user, TOKEN_SECRET, {
        expiresIn: TOKEN_TTL+"ms"
    })
}
module.exports.createUser = async (req, res) => {
    return UserService.createUser(req.body)
        .then( user => res.status(201).json(user))
        .catch( error => res.status(400).json(error));
};

module.exports.updateUser = async (req, res) => {
    return UserService.updateUser(req.params.id, {...req.body})
        .then( user => res.status(200).json(user))
        .catch( error => res.status(404).json(error));
};

module.exports.findUsers = async (req, res) => {
    return UserService.findUsers()
        .then( users => res.status(200).json(users))
        .catch( errors => res.status(400).json(errors));
};

module.exports.findOneUser = async (req, res) => {
    return UserService.findOneUser(req.params.id)
        .then( user => res.status(200).json(user))
        .catch( error => res.status(404).json(error));
};

module.exports.deleteOneUser = async (req, res) => {
    return UserService.deleteOneUser(req.params.id)
        .then( user => res.status(200).json(user))
        .catch( error => res.status(404).json(error));
};

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.login(email, password);
    if(user !== null){
        delete user["password"];
        const token = createToken({...user});
        return res.status(200).json({token: token});
    }
    else{
        return res.status(404).json({error: "Email or password Invalid"});
    }
};