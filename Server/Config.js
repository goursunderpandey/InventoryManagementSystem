const mongoose = require("mongoose")

const Dburl = "mongodb://localhost:27017/CurdApp"
mongoose.connect(Dburl)
.then(() => {
    console.log("Database is connected");
})
.catch((err) => {
    console.log(err);
})

module.exports = mongoose