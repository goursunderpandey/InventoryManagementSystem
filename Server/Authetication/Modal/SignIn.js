const mongoose = require("mongoose")

const SignInschema = mongoose.Schema({
    UserName : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    }
})


module.exports = mongoose.model("SignIn",SignInschema)