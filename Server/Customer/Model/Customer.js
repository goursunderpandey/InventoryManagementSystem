const mongoose = require("mongoose")


const customerSchema = mongoose.Schema({
    FirstName: {
        type:String,
        required : true
    },
    LastName: {
        type:String,
        required : true
    },
    Phonenumber: {
        type:Number,
        required : true
    },
    Email: {
        type:String,
        required : true
    }

})


module.exports = mongoose.model("Customer",customerSchema);