import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { CanActivate } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { environment } from './../../environments/environment';
export interface UserResponse {
   user:string
}
@Injectable()
export class AdminService   {
    public activeToken: String;

    constructor(private http: HttpClient) {
        
    }
   
    postUserLogin(data: any) {
        return this.http.post<UserResponse>(environment.BASE_URL + '/user-login/', data).map(res => res);
    }
     canActivate() {

       var userType=Cookie.get("user")
       if(userType=="admin"){
        return true;
       }
       else{
        return false;
       }
       
    }
}