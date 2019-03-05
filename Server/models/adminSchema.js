var mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
    Role: String,
    FullName:{
      FirstName: String,
      LastName: String,
    },
    MobNum: String,
    Email: String,
    Role_Id:Number
  });

  const crtroleSchema =  mongoose.model("Usr_Role", roleSchema, "Usr_Role");
  module.exports = crtroleSchema;





  
  