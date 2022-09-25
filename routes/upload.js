const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/jimp")

const uploadSchema = mongoose.Schema({
    img:String
})
module.exports = mongoose.model("upload" , uploadSchema)
