const mongoose = require("mongoose");

const SignUpSchema = new mongoose.Schema({
  Name: { 
    type: String, 
    required: true 
  },
  Email: { 
    type: String, 
    required: true 
  },
  Password : {
    type : String,
    required : true
    
  },
  PhoneNumber :  {
    type : Number,
    
  }

});

module.exports = mongoose.model("SignUp", SignUpSchema);
