var express = require('express');
var router = express.Router();
const userModel = require("./users")
const multer = require("multer");
var Jimp = require('jimp');
const path = require("path");
const { readFile } = require('fs');

//bc kya kru cludiMul ya multer
const storage = multer.diskStorage({
  destination:(req,file,cb) =>{
    cb(null , './public/images/uploads');
  },
  filename:(req,file,cb) =>{
    cb(null, Date.now() +  path.extname(file.originalname))
  }
})

const upload = multer({storage:storage})


/* GET home page. */
router.get('/', async function(req, res, next) {
  const images = await userModel.find()
  if(images.length > 0 ){
    console.log(images[images.length - 1]._id  , "last element");
    let idOfLastImage = images[images.length -1]._id
    let nameOfLastImage = images[images.length -1].img
    res.render('index' , { images , id:idOfLastImage , name:nameOfLastImage });
  }else{
    res.render('index' , {images})
  }

});

router.post("/upload" , upload.single("file"),  async function(req,res,next){
  
  const addingPicToUserModel = await userModel.create({
    img:req.file.filename
  })
  console.log(addingPicToUserModel);

  res.redirect("/")


})

router.get("/mirror/:thatImgId" , async (req,res,next) =>{
  var thatImage = await userModel.findById(req.params.thatImgId)
  // console.log(thatImage.img);
  var imageName = thatImage.img
  // console.log(imageName);
  let newImage = await Jimp.read(`./public/images/uploads/${imageName}`)
  await newImage.mirror(true , false , (err , data)=>{
    if(err) throw err
    console.log(data , ",,.lokesh");
    
  })
  const name = await newImage.writeAsync(`./public/images/JIMP/mirror/${imageName}`)
  res.json(name)
})


//greyScale logic
router.get("/greyScale/:thatImgName" , async (req,res,next) =>{
  var imageName = req.params.thatImgName
  console.log(imageName);
  let newImage = await Jimp.read(`./public/images/JIMP/mirror/${imageName}`)
  await newImage.greyscale()
  const name = await newImage.writeAsync(`./public/images/JIMP/greyscale/${imageName}`)
  res.json(name)
})


//invert logic
router.get("/invert/:thatImgName" , async (req,res,next) =>{
  var imageName = req.params.thatImgName
  console.log(imageName);
  let newImage = await Jimp.read(`./public/images/JIMP/greyscale/${imageName}`)
  await newImage.invert()
  const name = await newImage.writeAsync(`./public/images/JIMP/invert/${imageName}`)
  res.json(name)
})


//blur logic
router.get("/blur/:thatImgName" , async (req,res,next) =>{
  var imageName = req.params.thatImgName
  console.log(imageName);
  let newImage = await Jimp.read(`./public/images/JIMP/invert/${imageName}`)
  await newImage.blur(5)
  const name = await newImage.writeAsync(`./public/images/JIMP/blur/${imageName}`)
  res.json(name)
})


//rotateby90 logic
router.get("/rotateby90/:thatImgName" , async (req,res,next) =>{
  var imageName = req.params.thatImgName
  console.log(imageName);
  let newImage = await Jimp.read(`./public/images/JIMP/blur/${imageName}`)
  await newImage.rotate(90)
  const name = await newImage.writeAsync(`./public/images/JIMP/rotates/rotateby90/${imageName}`)
  res.json(name)
})


//rotateby_90 logic
router.get("/rotateby_90/:thatImgName" , async (req,res,next) =>{
  var imageName = req.params.thatImgName
  console.log(imageName);
  let newImage = await Jimp.read(`./public/images/JIMP/rotates/rotateby90/${imageName}`)
  await newImage.rotate(90)
  const name = await newImage.writeAsync(`./public/images/JIMP/rotates/rotateby-90/${imageName}`)
  res.json(name)
})

//rotateby180 logic
router.get("/rotateby180/:thatImgName" , async (req,res,next) =>{
  var imageName = req.params.thatImgName
  console.log(imageName);
  let newImage = await Jimp.read(`./public/images/JIMP/rotates/rotateby-90/${imageName}`)
  await newImage.rotate(90)
  const name = await newImage.writeAsync(`./public/images/JIMP/rotates/rotateby180/${imageName}`)
  res.json(name)
})

//rotateby270 logic
router.get("/rotateby270/:thatImgName" , async (req,res,next) =>{
  var imageName = req.params.thatImgName
  console.log(imageName);
  let newImage = await Jimp.read(`./public/images/JIMP/rotates/rotateby180/${imageName}`)
  await newImage.rotate(90)
  const name = await newImage.writeAsync(`./public/images/JIMP/rotates/rotateby270/${imageName}`)
  res.json(name)
})


// //download logic
// router.get("/:srcOfThatImage" , async (req,res,next) =>{
  
//   res.download(req.params.srcOfThatImage)
//   res.end();
// })





module.exports = router;
