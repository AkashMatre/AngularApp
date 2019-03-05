var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
  UserName: String,
    PassWord: String,
    UserType: String,
    FullName: {
      FirstName: String,
      MiddleName: String,
      LastName: String
    },
    Email: {
      type: String
    //    unique: true
    },
    MobileNo: {
      type:Number
      // unique: true,
      // minLength: 10,
      // maxLength: 10
    },
    isAuthorized: { type: String },

    Usr_Id:Number
  });
  var loginModel = mongoose.model("UserLogin", userSchema, "Users_Login");
  module.exports = loginModel;



  