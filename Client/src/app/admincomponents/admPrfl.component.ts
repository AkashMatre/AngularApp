import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';
import { adminService } from '../service/app.admin.service'
import { admprflmodl } from '../models/app.admprfl.model';

@Component({
  selector: 'app-crtRole',
  templateUrl: './admPrfl.component.html',
  styleUrls: ['./../css/paper-dashboard.css','./../css/bootstrap.min.css','./../css/demo.css']
})
export class admPrfl implements OnInit {

   admdta: admprflmodl;
//   //serv: usrServc;

   constructor( private serv:adminService) {
  this.admdta = new admprflmodl('','','',0,'','',0);
   }

  ngOnInit(): void {

        this.serv.getPrflDta(localStorage.getItem("usrid")).subscribe(
      (resp:Response) => {
        let dta = resp.json().data;
        this.admdta.FirstName = dta.FullName.FirstName;
        this.admdta.LastName = dta.FullName.LastName;
        this.admdta.Email = dta.Email;
        this.admdta.MobileNo = dta.MobileNo;
        this.admdta.UserName = dta.UserName;
        this.admdta.PassWord = dta.PassWord;
        this.admdta.usrid = dta.Usr_Id;
      },
      error =>{
        console.log(`Error occured at login :  ${error}`);
      });

  };

updtprfl(){

  this.serv.updtPrflDta(this.admdta).subscribe(
    (resp:Response) => {
      let dta = resp.json().data;
      alert("Admin Data Updated successfully....!");
    },
    error =>{
      console.log(`Error occured at login :  ${error}`);
    });
}

}

