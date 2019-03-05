import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { LoginService } from '../service/app.login.service';
import { User } from '../models/app.user.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.component.html',
  styleUrls: ['./../css/login.css','./../css/paper-dashboard.css','./../css/demo.css','./../css/bootstrap.min.css']

})
export class LoginComponent implements OnInit {

  user: User;
  Users:Array<User>;

  constructor(private router:Router,private loginserv:LoginService) {

    this.user = new User("","");
    this.Users = new Array<User>();

   }

  ngOnInit(): void {
  }


  login()
  {

    this.loginserv.loginIn(this.user).subscribe(
      (resp:Response) => {

        if(resp.json().data.UserType === "A")
        {
          localStorage.setItem("usrid",resp.json().data.Usr_Id);
          localStorage.setItem("name",resp.json().data.FullName.FirstName);
          localStorage.setItem("usrnm",resp.json().data.UserName);
          localStorage.setItem("pswrd",resp.json().data.PassWord);
          this.router.navigate(['admnHome']);
        }
        else if(resp.json().data.UserType === "O")
        {
          localStorage.setItem("usrid",resp.json().data.Usr_Id);
          localStorage.setItem("name",resp.json().data.FullName.FirstName);
          localStorage.setItem("usrnm",resp.json().data.UserName);
          localStorage.setItem("pswrd",resp.json().data.PassWord);
          this.router.navigate(['oprtrHome']);
        }
        else if(resp.json().data.UserType === "U" && resp.json().data.isAuthorized === "A")
        {
          localStorage.setItem("usrid",resp.json().data.Usr_Id);
          localStorage.setItem("name",resp.json().data.FullName.FirstName);
          localStorage.setItem("usrnm",resp.json().data.UserName);
          localStorage.setItem("pswrd",resp.json().data.PassWord);
          this.router.navigate(['userHome']);
        }
      },
      error =>{
        console.log(`Error occured at login :  ${error}`);
      })
  }

}
