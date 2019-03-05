var mongoose = require("mongoose");

const userIdsSchema = mongoose.Schema({
    Usr_Id: Number,
    Rol_Id: Number
  });

  const idSchema =  mongoose.model("Static_Ids", userIdsSchema, "Static_Ids");
  module.exports = idSchema;
