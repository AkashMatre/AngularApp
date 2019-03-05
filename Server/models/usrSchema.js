var mongoose = require("mongoose");
const userRgSchema = mongoose.Schema({
    // PersonalID: {
    //   type:Number
    //   // unique: true        // like 101, 102, 103 etc
    // },  
    FullName: {
      FirstName: String,
      MiddleName: String,
      LastName: String
    },
    Gender: String,
    DateOfBirth: String,
    Age: Number,        // auto calculate
    Address: {
      FlatNumber: String,
      SocietyName: String,
      AreaName: String
    },
    Email: {
      type: String
    //    unique: true
    },
    City: String,
    State: String,
    Pincode: Number,
    PhoneNo: Number,                  // should be optional
    MobileNo: {
      type:Number
      // unique: true,
      // minLength: 10,
      // maxLength: 10
    },
    PhysicalDisability: {
      type: String,
      // default: 'null'
    },                            // optional
    MaritalStatus: String,
    Education: String,
    BirthSign: {
      type: String,
      // default: 'null'
    },                        // optional
    isAuthorized: { type: String },

    Usr_Id:Number
  });
  
 const userRegModel =  mongoose.model("Usr_Registration", userRgSchema, "Usr_Registration");
 module.exports = userRegModel;
