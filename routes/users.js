const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/noSchema")
const lSchema = mongoose.Schema({
    img:String
})

module.exports = mongoose.model("user" , lSchema)
