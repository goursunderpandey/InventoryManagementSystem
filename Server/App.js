const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())
require("../Server/Config")
const Signup = require("../Server/Authetication/Routes/Routes")
app.use(Signup)

const customer = require("../Server/Customer/Routes/Customer");
app.use(customer)

app.listen(PORT,() => {
    console.log(`Server is running of ${PORT}`)
})