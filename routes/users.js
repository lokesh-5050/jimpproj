const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/jimp2")

const userPublicSchema = mongoose.Schema({
  img:{
    type:String,
    default:"def.jpg"
  }
})

module.exports = mongoose.model("user" , userPublicSchema)
