
var frame = document.getElementById("frame")
var spanone = document.querySelector("#spanone")
var inputField = document.querySelector("#inputField")
spanone.addEventListener("click", function () {
  inputField.click()
})


inputField.addEventListener("change", function (e) {
  e.preventDefault()
  console.log(URL.createObjectURL(e.target.files[0]));
  frame.src = URL.createObjectURL(e.target.files[0])

})

//image uploaded and now gonna show the uploaded image with the help of axios and src

var uploadForm = document.getElementById("uploadForm")
var submitForm = document.getElementById("submitForm")
uploadForm.addEventListener("submit", async function (e) {
  e.preventDefault()
  var formData = new FormData(uploadForm)
  console.log([...formData][0][1].name);
  var ourFile = [...formData][0][1]
  console.log(ourFile);

  const res = await axios.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  })

  console.log(res.data);

  const indexPageRes = await axios.get(`/ok/${res.data._id}`)
  
  console.log(indexPageRes.data);

  var testPic = document.getElementById("testPic")
  frame.src = `${indexPageRes.data.img}`
  testPic.src = `${indexPageRes.data.img}`
  testPic.itemid = `${indexPageRes.data._id}`

})

//axios for Mirror

var Mirror = document.getElementById("Mirror")
Mirror.addEventListener("click", async function (e) {
  e.preventDefault()
  console.log(e);
  console.log(e.path[3].children[0].childNodes[1].itemid);
  try {
    const editedFile = await axios.get(`/mirror/${e.path[3].children[0].childNodes[1].itemid}`)
    console.log(editedFile);
    
  } catch (error) {
    res.json(error)
  }

})