
var frame = document.getElementById("frame")
var spanone = document.querySelector("#spanone")
var inputField = document.querySelector("#inputField")
spanone.addEventListener("click", function () {
  inputField.click()
})


//mirror logic

var mirror = document.getElementById("Mirror")
mirror.addEventListener("click" , async (e)=>{
  // prompt("hey")
  console.log(e);
  // console.log(e.path[4].children[1].children[0].children[0].firstChild.data); //id of uploaded image
  console.log(e.path[4].children[1].children[0].children[0].firstChild.data); // name of upaodwed image
  const resOfMirror = await axios.get(`/mirror/${e.path[4].children[1].children[0].children[0].firstChild.data}`) //sending name
  console.log(resOfMirror);

  // console.log(`./public/images/JIMP/${e.path[4].children[1].children[0].children[1].firstChild.data}`);

  frame.src = `../images/JIMP/mirror/${e.path[4].children[1].children[0].children[0].firstChild.data}`
})

//greyScale logic

var greyScale = document.getElementById("greyScale")
greyScale.addEventListener("click" , async (e)=>{
  // prompt("hey")
  console.log(e);
  // console.log(e.path[4].children[1].children[0].children[0].firstChild.data); //id of uploaded image
  console.log(e.path[4].children[1].children[0].children[0].firstChild.data); // name of upaodwed image
  const resOfGreyScale = await axios.get(`/greyScale/${e.path[4].children[1].children[0].children[0].firstChild.data}`) //seding name
  console.log(resOfGreyScale);

  // console.log(`./public/images/JIMP/${e.path[4].children[1].children[0].children[1].firstChild.data}`);

  frame.src = `../images/JIMP/greyscale/${e.path[4].children[1].children[0].children[0].firstChild.data}`


})

//invert logic

var invert = document.getElementById("invert")
invert.addEventListener("click" , async (e)=>{
  // prompt("hey")
  console.log(e);
  console.log(e.path[4].children[1].children[0].children[0].firstChild.data); //id of uploaded image
  console.log(e.path[4].children[1].children[0].children[1].firstChild.data); // name of upaodwed image
  const resOfInvert = await axios.get(`/invert/${e.path[4].children[1].children[0].children[0].firstChild.data}`) //seding name
  console.log(resOfInvert);

  // console.log(`./public/images/JIMP/${e.path[4].children[1].children[0].children[1].firstChild.data}`);

  frame.src = `../images/JIMP/invert/${e.path[4].children[1].children[0].children[0].firstChild.data}`


})


//blur logic

var blur = document.getElementById("blur")
blur.addEventListener("click" , async (e)=>{
  // prompt("hey")
  console.log(e);
  console.log(e.path[4].children[1].children[0].children[0].firstChild.data); //id of uploaded image
  console.log(e.path[4].children[1].children[0].children[1].firstChild.data); // name of upaodwed image
  const resOfblur = await axios.get(`/blur/${e.path[4].children[1].children[0].children[0].firstChild.data}`) //seding name
  console.log(resOfblur);

  // console.log(`./public/images/JIMP/${e.path[4].children[1].children[0].children[1].firstChild.data}`);

  frame.src = `../images/JIMP/blur/${e.path[4].children[1].children[0].children[0].firstChild.data}`


})


//rotate by 90deg logic

var rotateby90 = document.getElementById("rotateby90")
rotateby90.addEventListener("click" , async (e)=>{
  // prompt("hey")
  console.log(e);
  console.log(e.path[4].children[1].children[0].children[0].firstChild.data); //id of uploaded image
  console.log(e.path[4].children[1].children[0].children[1].firstChild.data); // name of upaodwed image
  const resOfrotateby90 = await axios.get(`/rotateby90/${e.path[4].children[1].children[0].children[0].firstChild.data}`) //seding name
  console.log(resOfrotateby90);

  // console.log(`./public/images/JIMP/${e.path[4].children[1].children[0].children[1].firstChild.data}`);

  frame.src = `../images/JIMP/rotates/rotateby90/${e.path[4].children[1].children[0].children[0].firstChild.data}`


})


//rotate by -90deg logic

var rotate_90 = document.getElementById("rotate-90")
rotate_90.addEventListener("click" , async (e)=>{
  // prompt("hey")
  console.log(e);
  console.log(e.path[4].children[1].children[0].children[0].firstChild.data); //id of uploaded image
  console.log(e.path[4].children[1].children[0].children[1].firstChild.data); // name of upaodwed image
  const resOfrotateby_90 = await axios.get(`/rotateby_90/${e.path[4].children[1].children[0].children[0].firstChild.data}`) //seding name
  console.log(resOfrotateby_90);

  // console.log(`./public/images/JIMP/${e.path[4].children[1].children[0].children[1].firstChild.data}`);

  frame.src = `../images/JIMP/rotates/rotateby-90/${e.path[4].children[1].children[0].children[0].firstChild.data}`


})


//rotate by 180deg logic

var rotate180 = document.getElementById("rotate180")
rotate180.addEventListener("click" , async (e)=>{
  // prompt("hey")
  console.log(e);
  console.log(e.path[4].children[1].children[0].children[0].firstChild.data); //id of uploaded image
  console.log(e.path[4].children[1].children[0].children[1].firstChild.data); // name of upaodwed image
  const resOfrotateby180 = await axios.get(`/rotateby180/${e.path[4].children[1].children[0].children[0].firstChild.data}`) //seding name
  console.log(resOfrotateby180);

  // console.log(`./public/images/JIMP/${e.path[4].children[1].children[0].children[1].firstChild.data}`);

  frame.src = `../images/JIMP/rotates/rotateby180/${e.path[4].children[1].children[0].children[0].firstChild.data}`


})

//rotate by 270deg logic

var rotate270 = document.getElementById("rotate270")
rotate270.addEventListener("click" , async (e)=>{
  // prompt("hey")
  console.log(e);
  console.log(e.path[4].children[1].children[0].children[0].firstChild.data); //id of uploaded image
  console.log(e.path[4].children[1].children[0].children[1].firstChild.data); // name of upaodwed image
  const resOfrotateby270 = await axios.get(`/rotateby270/${e.path[4].children[1].children[0].children[0].firstChild.data}`) //seding name
  console.log(resOfrotateby270);

  // console.log(`./public/images/JIMP/${e.path[4].children[1].children[0].children[1].firstChild.data}`);

  frame.src = `../images/JIMP/rotates/rotateby270/${e.path[4].children[1].children[0].children[0].firstChild.data}`
  

})

//discard all logic

var discard = document.getElementById("discard")
discard.addEventListener("click" , async (e)=>{
  // prompt("hey")
  console.log(e);
  console.log(e.path[4].children[1].children[0].children[0].firstChild.data); //id of uploaded image
  console.log(e.path[4].children[1].children[0].children[1].firstChild.data); // name of upaodwed image
  // const resOfrotateby270 = await axios.get(`/rotateby270/${e.path[4].children[1].children[0].children[1].firstChild.data}`) //seding name
  // console.log(resOfrotateby270);


  frame.src = `../images/uploads/${e.path[4].children[1].children[0].children[0].firstChild.data}`
  

})


//download logic

var download = document.getElementById("download")
download.addEventListener("click" , async (e)=>{
  console.log(e);
  // console.log(e.path[4].children[1].children[0].children[1].firstChild.data); // name of upaodwed image
  console.log(e.path[3].children[1].children[0].children[1].children[0].currentSrc); // whole src
  download.href = `${e.path[3].children[1].children[0].children[1].children[0].currentSrc}`

})




