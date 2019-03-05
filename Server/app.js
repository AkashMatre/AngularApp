var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");
//var jwt = require("jsonwebtoken");

// mongodb database setting
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Project_Assignment", {
  useNewUrlParser: true
});
var dbConnect = mongoose.connection;
if (!dbConnect) {
  console.log("connection not establish");
  return;
}

// loading our own routing files
//var productsRouter = require("./routes/products");
var usersLogin = require("./routes/loginDal");
var userReg = require("./routes/regDal");
var validteTokn = require("./commonservice/tokenauthchk");
var adminDal = require("./routes/admin/adminDal");
var ausrDal = require("./routes/accessuser/aUserDal");

// setting middleware
module.exports = app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//*****************************Admin Api's */
app.post("/login", function(request, response) {
  usersLogin.authUserLogin(request, response);
});
app.post("/reg", function(request, response) {
  userReg.rgstrUsrDtls(request, response);
});
app.post("/userrolecrt", function(request, response) {
  adminDal.createRole(request, response);
});
app.get("/getacesusers", function(request, response) {
  adminDal.getUsrDta(request, response);
});
app.post("/rejctaprvUsr", function(request, response) {
  adminDal.crjctAprvUsr(request, response);
});
app.post("/admget", function(request, response) {
  adminDal.getadmDta(request, response);
});
app.post("/admnUpdt", function(request, response) {
  adminDal.updtAdmDta(request, response);
})



//*********************************** Access User Api's */
app.post("/usrget", function(request, response) {
  ausrDal.getUsrDta(request, response);
});
app.post("/usrUpdt", function(request, response) {
  ausrDal.updtUsrDta(request, response); 
})
app.post("/usrcredupdt", function(request, response) {
  ausrDal.updtUsrCredDta(request, response); 
})



app.listen(3000, () => {
  console.log("server started on port no 3000");
});
