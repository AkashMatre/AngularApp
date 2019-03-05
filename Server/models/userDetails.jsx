var mongoose = require("mongoose");

const userDtlsSchema = mongoose.Schema({
    Usr_Id: Number,
    Rol_Id: Number,
    FullName: {
        FirstName: String,
        MiddleName: String,
        LastName: String
      },
      Ip:String,
      Role:String
    
  });

  const usrdtlSchema =  mongoose.model("Usr_Details", userDtlsSchema, "Usr_Details");
  module.exports = usrdtlSchema;