import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
//import {User} from './../models/app.user.model';



@Injectable()
export class adminService{
    url:string;

    constructor(private http:Http){
        this.url = 'http://localhost:3000';
    }

    getUsrDta():Observable<Response>{
        let resp: Observable<Response>;
        let header: Headers = new Headers({"Content-Type":"application/json"});

        let options: RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.get(`${this.url}/getacesusers`,options);
        return resp;
    }
    rjcaprvUsr(c,str):Observable<Response>{

      if(str === "aprv")
      {
        let userObj ={
          dta: JSON.stringify(c),
          str:str
        }


        let resp: Observable<Response>;
        let header: Headers = new Headers({"Content-Type":"application/json"});

        let options: RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.post(`${this.url}/rejctaprvUsr`,userObj,options);
        return resp;
      }
      else if(str === "rjct")
      {
        let userObj = {
          dta: JSON.stringify(c),
          str:str
        }


        let resp: Observable<Response>;
        let header: Headers = new Headers({"Content-Type":"application/json"});

        let options: RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.post(`${this.url}/rejctaprvUsr`,userObj,options);
        return resp;
      }

  }

  crtRole(roldta):Observable<Response>
  {
    console.log("in service");
    let resp: Observable<Response>;
    let header: Headers = new Headers({"Content-Type":"application/json"});

    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.post(`${this.url}/userrolecrt`,roldta,options);
    return resp;

  }
  getPrflDta(id){



    let usrid = {
      uid : id
    }

    console.log("in service"+usrid.uid);
    let resp: Observable<Response>;
    let header: Headers = new Headers({"Content-Type":"application/json"});

    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.post(`${this.url}/admget`,usrid,options);
    return resp;

  }


  updtPrflDta(admdta){

    let resp: Observable<Response>;
    let header: Headers = new Headers({"Content-Type":"application/json"});

    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.post(`${this.url}/admnUpdt`,admdta,options);
    return resp;

  }

}

