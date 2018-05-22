import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { environment } from './../../environments/environment';
export interface UserResponse {
   user:string
}
@Injectable()
export class SuperAdminService {
    public activeToken: String;
    public data:any
    constructor(private http: HttpClient) {
        
    }
   
    postUserLogin(data: any) {
        return this.http.post<UserResponse>(environment.BASE_URL + '/user-login/', data).map(res => res);
    }
    addAdmin(data: any) {
        return this.http.post<UserResponse>(environment.BASE_URL + '/addadmin/', data).map(res => res);
    }
}