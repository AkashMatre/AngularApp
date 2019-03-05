import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import {User} from '../models/app.user.model';



@Injectable()
export class LoginService{
    url:string;

    constructor(private http:Http){
        this.url = 'http://localhost:3000';
    }

    loginIn(user:User):Observable<Response>{
        let resp: Observable<Response>;
        let header: Headers = new Headers({"Content-Type":"application/json"});

        let options: RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.post(`${this.url}/login`, JSON.stringify(user),options);
        return resp;
    }
}

