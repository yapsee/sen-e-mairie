const express = require("express");
const UserController = require("./../controllers/user.controller");

const { Router } = express;

const UserRouter = Router();

UserRouter.route("/")
    .post(UserController.createUser)
    .get(UserController.findUsers);
UserRouter.post("/login",UserController.login);
UserRouter.route("/:id")
    .get(UserController.findOneUser)
    .put(UserController.updateUser)
    .delete(UserController.deleteOneUser);

module.exports = UserRouter;
