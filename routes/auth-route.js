const express = require("express");
// const {register, login} = require('../controllers/auth-controller')
const authController = require("../controllers/auth-controller");
const authenticate = require("../middlewares/authenticate");

const authRoute = express.Router();

authRoute.get("/me", authenticate, authController.getMe);
authRoute.post("/register", authController.register);
authRoute.post("/login", authController.login);

module.exports = authRoute;
