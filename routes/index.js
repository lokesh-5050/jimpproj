var express = require('express');
var router = express.Router();
const uploadModel = require("./upload")
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
var Jimp = require('jimp');


cloudinary.config({
  cloud_name: "dkhzlhxum",
  api_key: "748552462825973",
  api_secret: "rTX3Ad4uthlqjFS6GayHhUwKv_Q",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "JIMP",
  },
});

const upload = multer({ storage: storage });

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index' , );

});

router.post("/upload" , upload.single("file"),  async function(req,res,next){
  
  var uploaded = await uploadModel.create({
    img:req.file.path
  })
  console.log(uploaded);
  res.json(uploaded)
  // res.redirect("back")


})

//api for show uploaded image via axios
router.get("/ok/:thatFileId" , async (req,res,next)=>{
  var files = await uploadModel.findById(req.params.thatFileId)
  res.json(files)
})


//for mirror image
router.get("/mirror/:thatFileId" , async (req,res,next) =>{

 const editedFile = await Jimp.read(req.params.thatFileId, (err, img) => {
  if (err) throw err;
  img
    .mirror(180, 180) // resize
    .write('tesla.car.jpg') //save
})

  res.json(editedFile)

})




module.exports = router;
