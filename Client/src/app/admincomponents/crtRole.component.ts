import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';
import { adminService } from '../service/app.admin.service';
import { crtRol } from '../models/app.crtRole.model';
@Component({
  selector: 'app-crtRole',
  templateUrl: './crtRole.component.html',
  styleUrls: ['./../css/paper-dashboard.css','./../css/bootstrap.min.css','./../css/demo.css']
})
export class crtRole implements OnInit {

   crtrl: crtRol;
//   //serv: usrServc;

  constructor( private serv:adminService) {

    this.crtrl = new crtRol("","","","",0);
  }

  ngOnInit(): void {
    // alert(localStorage.getItem("usrid"));

      // this.serv.sveUserDta(this.user).subscribe(
      //       (resp:Response) => {
      //         console.log(resp.json().data)
      //       },
      //       error =>{
      //         console.log(`Error occured at login :  ${error}`);
      //       });
  };

//   save(){

//     this.serv.sveUserDta(this.user).subscribe(
//       (resp:Response) => {
//         console.log(resp.json().data)
//       },
//       error =>{
//         console.log(`Error occured at login :  ${error}`);
//       });

//   }
crtRole(){
    this.serv.crtRole(this.crtrl).subscribe(
      (resp:Response) => {
        alert("New Role created Successfully...!");
      },
      error =>{
        console.log(`Error occured at login :  ${error}`);
      });
}

}

