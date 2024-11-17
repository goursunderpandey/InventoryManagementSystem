const express = require("express")
const Router = express.Router()
const SignUpControoler = require("../Controller/Signup");
const SignIn = require("../Controller/SignIn");


Router.post("/Signup",SignUpControoler);
Router.post("/SignIn",SignIn)

module.exports = Router