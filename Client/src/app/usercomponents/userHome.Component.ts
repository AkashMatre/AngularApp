import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userHome',
  templateUrl: './userHome.Component.html',
  styleUrls: ['./../css/paper-dashboard.css','./../css/bootstrap.min.css','./../css/demo.css']
})
export class usereHome implements OnInit {
  name:any;
  constructor(private router:Router) {
    this.name = localStorage.getItem("usrnm");

   }

  ngOnInit(): void { }

  logout(){
    localStorage.removeItem("usrid");
    localStorage.removeItem("name");
    localStorage.removeItem("usrnm");
    localStorage.removeItem("pswrd");
    this.router.navigate(['']);
}

}
