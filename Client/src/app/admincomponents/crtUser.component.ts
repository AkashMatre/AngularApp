import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';
import { userSchema } from '../models/app.usrshema.model';
import { usrServc } from '../service/app.user.service';
import { newUser } from '../models/newusrschema';
import { User } from '../models/app.user.model';
@Component({
  selector: 'app-crtUser',
  templateUrl: './crtUser.component.html',
  styleUrls: ['./../css/paper-dashboard.css','./../css/bootstrap.min.css','./../css/demo.css']
})
export class crtUser implements OnInit {

  user: newUser;
  //serv: usrServc;

  constructor( private serv: usrServc) {
    this.user = new newUser(0,'','','','','',0,'','','','','','','','','','','','','','',0);
  }

  ngOnInit(): void {
  };

  save(){

    this.serv.sveUserDta(this.user).subscribe(
      (resp:Response) => {
        console.log(resp.json().data);
        alert("Access User Created Successfully....!");
      },
      error =>{
        console.log(`Error occured at login :  ${error}`);
      });

  }

}

