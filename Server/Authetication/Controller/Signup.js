
const Bacrypt = require("bcrypt")
const SignUpSchema = require("../Modal/Signup")

const SignUpControoler = async (req,res) => {

    try {

       // console.log(req.body,"777")
        const {Name, Password , Email,PhoneNumber} = req.body;
    const hashpassword = await Bacrypt.hash(Password,10);
     
     const newuser = await SignUpSchema.create({
        Name:Name,
        Password : hashpassword,
        Email : Email,
        PhoneNumber : PhoneNumber,
     });


     res.status(201).send(newuser)


    } catch (error) {
        console.log(error);
        res.status(401).send(error)
    }
}


module.exports = SignUpControoler