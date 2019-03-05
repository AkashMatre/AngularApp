var crtroleSchema = require("../../models/adminSchema");
var userRegModel = require("./../../models/usrSchema");
var loginModel = require("./../../models/loginSchema");


module.exports = {
    getUsrDta(request, response)
    {
       console.log(request.body.uid+"test usr id in update");
        userRegModel.find({Usr_Id:request.body.uid}).exec(function(err,res){        
            if(err)
            {
                console.log("in error");
                response.statusCode = 500;
                response.send({status:response.statusCode,err});    
            }
            else
            { 
                response.send({status:200,data:res});
            }
        })
    },

    updtUsrDta(request,response)
    {       
        //console.log(JSON.stringify(request.body.usrid)+"   in update test");
    var UsrRegDtls = {
        FullName :{
            FirstName: request.body.FirstName,
            MiddleName: request.body.MiddleName,
            LastName: request.body.LastName
        },
        Gender: request.body.Gender,
        DateOfBirth: request.body.DateOfBirth,
        Age:  request.body.Age, 
        Address: {
            FlatNumber: request.body.FlatNumber,
            SocietyName: request.body.SocietyName,
            AreaName: request.body.AreaName
          },
        Email: request.body.Email,
        City: request.body.City,
        State: request.body.State,
        Pincode: request.body.Pincode,
        PhoneNo: request.body.PhoneNo,                 
        MobileNo:request.body.MobileNo,
        PhysicalDisability:request.body.PhysicalDisability,                 
        MaritalStatus:request.body.MaritalStatus,
        Education: request.body.Education,
        BirthSign:request.body.BirthSign,                       
        isAuthorized: "E",
        Usr_Id:request.body.usrid      
    }
    userRegModel.updateOne({Usr_Id:UsrRegDtls.Usr_Id},UsrRegDtls,function(error,res){
        if(error)
        {
            response.send({message:"Sorry!....User Details Not Updated...!",statusCode:200,data:res});  
        }
        else
        {
            response.send({message:"User details enter successfully...",statusCode:200,data:res});
        }
    });    
    },
    updtUsrCredDta(request,response){
        var UsrCredDtls = {
                UserName: request.body.UserName,
                PassWord: request.body.PassWord     
        }
        loginModel.updateOne({Usr_Id:request.body.usrid},UsrCredDtls,function(error,res){
            if(error)
            {
                response.send({message:"Sorry!....User Details Not Updated...!",statusCode:200,data:res});  
            }
            else
            {
                response.send({message:"User details enter successfully...",statusCode:200,data:res});
            }
        });
    }

}