const SignInSchema = require("../Modal/Signup"); 
const bcrypt = require("bcrypt"); 

const SignIn = async (req, res) => {
    try {
       
        const { UserName, Password } = req.body;

        const user = await SignInSchema.findOne({ UserName });
        if (!user) {
            return res.status(404).send({ error: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(Password, user.Password);
        if (!isPasswordValid) {
            return res.status(401).send({ error: "Invalid credentials" });
        }

       
        res.status(200).send({ message: "Login successful", user });
    } catch (error) {
        console.error(error); 
        res.status(500).send({ error: "Internal server error" });
    }
};

module.exports = SignIn;

