var userRegModel = require("../models/usrSchema");
 
module.exports = {
    rgstrUsrDtls(request,response)
    {
        
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
        Usr_Id:0      
    }
    userRegModel.create(UsrRegDtls,function(error,res){
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