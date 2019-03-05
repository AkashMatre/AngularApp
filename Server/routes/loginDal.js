var jwt = require("jsonwebtoken");
var loginModel = require('../models/loginSchema');
var usrdtlSchema = require("./../models/userDetails.jsx");

var app = require("./../app");
var jwtSettings = {
  jwtSecret: "dbcsbiobc0708hdfcyesbombob"
};

module.exports = {

    authUserLogin(request,response)
    {
        var user = {
            UserName: request.body.UserName,
            PassWord: request.body.PassWord
          };

          const ip =
          request.headers["x-forwarded-for"] ||
          (request.connection && request.connection.remoteAddress) ||
          "";

          console.log(ip+"   test ip adress");
      
          loginModel.findOne({ UserName:user.UserName }, function(err, resdata) {
            if (err) {
              throw error;
            }
            console.log(resdata);
            if (!resdata) {
              response.send({
                statusCode: 404,
                message: "Sorry!User is not available"
              });
            } else if (resdata) {
              console.log("In else if " + JSON.stringify(resdata));
              if (resdata.PassWord != user.PassWord) {
                  response.send({
                    statusCode: 404,
                    message: "Sorry!User Name and Password does not match"
                  });
              } else {
                
                var token = jwt.sign({ resdata }, jwtSettings.jwtSecret, { //**** */
                    expiresIn: 3600
                  });
  
                    tokenStore = token;
                   console.log(tokenStore+"  gen token in login dal");

                   //*************/
                 
                   var usrdta = {
                    Role:resdata.UserType,
                    FullName: {
                      FirstName: resdata.FullName.FirstName,
                      MiddleName: "",
                      LastName: resdata.FullName.LastName
                    },
                    Usr_Id:resdata.Usr_Id,
                    Ip:ip,
                    Role_Id:0
                }
                   usrdtlSchema.create(usrdta,function(error,res){
                    if(error)
                    {
                       // response.send({message:"Sorry!....User role creation Details Not Updated...!",statusCode:404,data:res});  
                    }
                    else
                    {
                     // response.send({message:"User role creation Updated...!",statusCode:404,data:res});
                    }
                  });

                response.send({
                  authenticated: true,
                  message: "Login Success",
                  token: tokenStore,
                  statusCode:200,
                  data:resdata
                });
              }
            }
          });
    },

    authToken:function(reqToken){
      var tokenVeri;
      jwt.verify(reqToken, jwtSettings.jwtSecret, function(error, decoded){
            if(error){
              tokenVeri=false;   
            }
            else{
              tokenVeri=true;
            }
          });
          return tokenVeri; 
      }
    


}