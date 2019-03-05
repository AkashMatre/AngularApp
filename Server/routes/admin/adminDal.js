var crtroleSchema = require("./../../models/adminSchema");
var userRegModel = require("./../../models/usrSchema");
var idSchema = require("./../../models/staticids");
var loginModel = require("./../../models/loginSchema");
var roleSchema = require("./../../models/adminSchema");

module.exports = {
    createRole(request, response)
    {
        console.log(request.body+"   in test");
        var usrrolecrt = {
            Role:request.body.Role,
            FullName:{
                FirstName:request.body.FirstName,
                LastName:request.body.LastName
            },
            MobNum:request.body.MobNum,
            Email:request.body.Email,
            Role_Id:0
        }
        crtroleSchema.create(usrrolecrt,function(error,res){
            if(error)
            {
                response.send({message:"Sorry!....User role creation Details Not Updated...!",statusCode:404,data:res});  
            }
            else
            {
                var crntusrid = 0;
                var crntusridincr = 0;
                idSchema.find().exec(function(err,res){
                    if(err)
                    {
                        response.statusCode = 500;
                        response.send({status:response.statusCode,err});    
                    }
                    else
                    {
                        console.log(res+"  @@@");
                        console.log(res._id);
                            crntusrid = res.Rol_Id;
                            crntusridincr = crntusrid + 1;
                            idSchema.updateOne({},{'Rol_Id':crntusridincr},function(err,res){if(err){console.log("in error update");}else{console.log("update successful....!");}});
                            crtroleSchema.findOneAndUpdate({'MobNum':request.body.MobNum},{'Role_Id': crntusrid},{upsert:true},function(err, doc){
                                if(err)
                                {
                                    console.log(" error occured during Access User Aproval");
                                }
                                else{
                                    console.log("Approve Access User Successfuly...!");
                                }
                            });    
                    }
                });
                response.send({message:"User role creation details enter successfully...",statusCode:200,data:res});
            }
        });       
    },

    getUsrDta(request, response)
    {
        userRegModel.find({$or:[{isAuthorized:"E"},{isAuthorized:"R"}]}).exec(function(err,res){        
            if(err)
            {
                response.statusCode = 500;
                response.send({status:response.statusCode,err});    
            }
            else
            {
                response.send({status:200,data:res});
            }
        })
    },

    crjctAprvUsr(request, response){
        var userObj = JSON.parse(request.body.dta);
        // console.log(userObj.FullName.FirstName);
        // console.log(request.body.dta);
        // console.log(request.body.str);
        var usrid = {'Usr_Id':crntusridincr};
        var cndtn = {'MobileNo': userObj.MobileNo};
        var Adta = {'isAuthorized':"A",'Usr_Id': crntusrid};
        var Rdta = {'isAuthorized':"R"};

        if(request.body.str === "aprv")
        {
            if(userObj.Usr_Id == 0)
          {
            console.log("in aprv");
            var crntusrid = 0;
            var crntusridincr = 0;

            idSchema.findOne().exec(function(err,res){
                if(err)
                {
                    response.statusCode = 500;
                    response.send({status:response.statusCode,err});    
                }
                else
                {
                    crntusrid = res.Usr_Id;
                    crntusridincr = crntusrid + 1;
                    idSchema.update({},{'Usr_Id':crntusridincr},function(err,res){if(err){console.log("in error update");}else{console.log("update successful....!");}});
                    userRegModel.findOneAndUpdate(cndtn,{'isAuthorized':"A",'Usr_Id': crntusrid},{upsert:true},function(err, doc){
                        if(err)
                        {
                            console.log(" error occured during Access User Aproval");
                        }
                        else{
                            console.log("Approve Access User Successfuly...!");
                        }
                    });
                    loginModel.findOneAndRemove({'Usr_Id':crntusrid}, function(err){if(err){console.log("error occured during deleting logs..!")}});
                    var UsrRegDtls = {
                        UserName: userObj.Email,
                        PassWord: userObj.MobileNo,
                        UserType: "U",
                        FullName: {
                            FirstName:  userObj.FullName.FirstName,
                            MiddleName: userObj.FullName.MiddleName,
                            LastName: userObj.FullName.LastName
                        },
                        Email: userObj.Email,
                        MobileNo: userObj.MobileNo,
                        Usr_Id:crntusrid,
                        isAuthorized:"A"   
                    }
                    loginModel.create(UsrRegDtls,function(error,res){
                        if(error)
                        {
                            console.log(error);
                        }
                        else
                        {
                        console.log("success... in trasfrering data in users_login table");
                        }
                    });    
                    response.send({status:200,data:res});
                    
                }
            });    
          }

        }  
        else if(request.body.str === "rjct")
        {
            console.log("in reject");
            userRegModel.findOneAndUpdate(cndtn,Rdta,{upsert:true},function(err, doc){
                if(err)
                {
                    console.log(" error occured during Access User Rejection");
                }
                else{

                    loginModel.update({'Usr_Id':doc.Usr_Id},Rdta,function(err,res){
                        if(err)
                        {
                            console.log("in error update");
                        }
                        else{
                            console.log("update successful....!");
                        }  
                    });
                    console.log("Reject Access User Successfuly...!");
                }
            }); 
        }  

        
    },
    getadmDta(request, response)
    {
        // console.log("test in server"+request.body.uid);
        loginModel.findOne({Usr_Id:request.body.uid}).exec(function(err,res){        
            if(err)
            {
                console.log("in error");
                response.statusCode = 500;
                response.send({status:response.statusCode,err});    
            }
            else
            { 
                console.log(res);
                response.send({status:200,data:res});
            }
        })
    },
    updtAdmDta(request,response)
    {       
        console.log("in server"+request.body.usrid);
    var UsrRegDtls = {
        FullName :{
            FirstName: request.body.FirstName,
            MiddleName: "",
            LastName: request.body.LastName
        },
        Email: request.body.Email,               
        MobileNo:request.body.MobileNo,
        UserName:request.body.UserName,
        PassWord:request.body.PassWord,
        Usr_Id:request.body.usrid      
    }
    loginModel.updateOne({Usr_Id:UsrRegDtls.Usr_Id},UsrRegDtls,function(error,res){
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