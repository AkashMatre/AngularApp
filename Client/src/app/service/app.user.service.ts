import { Injectable } from '@angular/core';
import { newUser } from '../models/newusrschema';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class usrServc {
  url:string;

  constructor(private http:Http){
    this.url = 'http://localhost:3000';
}

  sveUserDta(usr:newUser):Observable<Response>
  {
    console.log("in service");
    let resp: Observable<Response>;
    let header: Headers = new Headers({"Content-Type":"application/json"});

    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.post(`${this.url}/reg`,usr,options);
    return resp;
  }


  getUserDta(id):Observable<Response>
  {

    let usrid = {
      uid : id
    }
    let resp: Observable<Response>;
    let header: Headers = new Headers({"Content-Type":"application/json"});
    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.post(`${this.url}/usrget`,usrid,options);
    return resp;
  }

  updtUserDta(usr:newUser):Observable<Response>
  {
    let resp: Observable<Response>;
    let header: Headers = new Headers({"Content-Type":"application/json"});
    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.post(`${this.url}/usrUpdt`,usr,options);
    return resp;
  }


}
