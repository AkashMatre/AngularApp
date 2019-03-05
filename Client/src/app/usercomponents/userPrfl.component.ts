import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';
import { userSchema } from '../models/app.usrshema.model';
import { usrServc } from '../service/app.user.service';
import { newUser } from '../models/newusrschema';
import { User } from '../models/app.user.model';
@Component({
  selector: 'app-userPrfl',
  templateUrl: './userPrfl.component.html',
  styleUrls: ['./../css/paper-dashboard.css','./../css/bootstrap.min.css','./../css/demo.css']
})
export class userPrfl implements OnInit {

  user: newUser;
  //serv: usrServc;

  constructor( private serv: usrServc) {
    this.user = new newUser(0,'','','','','',0,'','','','','','','','','','','','','','',0);
  }

  ngOnInit(): void {

    this.serv.getUserDta(localStorage.getItem("usrid")).subscribe(
      (resp:Response) => {

        console.log(resp.json().data[0]);

        this.user.FirstName = resp.json().data[0].FullName.FirstName;
        this.user.MiddleName = resp.json().data[0].FullName.MiddleName;
        this.user.LastName = resp.json().data[0].FullName.LastName;
        this.user.Email = resp.json().data[0].Email;
        this.user.MobileNo = resp.json().data[0].MobileNo;
        this.user.PhoneNo = resp.json().data[0].PhoneNo;
        this.user.Gender = resp.json().data[0].Gender;
        this.user.MaritalStatus = resp.json().data[0].MaritalStatus;
        this.user.PhysicalDisability = resp.json().data[0].PhysicalDisability;
        this.user.DateOfBirth = resp.json().data[0].DateOfBirth;
        this.user.Age = resp.json().data[0].Age;
        this.user.BirthSign = resp.json().data[0].BirthSign;
        this.user.FlatNumber = resp.json().data[0].Address.FlatNumber;
        this.user.SocietyName = resp.json().data[0].Address.SocietyName;
        this.user.AreaName = resp.json().data[0].Address.AreaName;
        this.user.City = resp.json().data[0].City;
        this.user.Pincode = resp.json().data[0].Pincode;
        this.user.State = resp.json().data[0].State;
        this.user.Education = resp.json().data[0].Education; 
        this.user.usrid = resp.json().data[0].Usr_Id;
      },
      error =>{
        console.log(`Error occured at login :  ${error}`);
      });

  };

  update(){

    alert(this.user.usrid);

    this.serv.updtUserDta(this.user).subscribe(
      (resp:Response) => {
        console.log(resp.json().data)
      },
      error =>{
        console.log(`Error occured at login :  ${error}`);
      });

  }

}

