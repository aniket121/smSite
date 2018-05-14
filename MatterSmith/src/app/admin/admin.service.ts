import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { environment } from './../../environments/environment';

@Injectable()
export class AdminService {
    public activeToken: String;

    constructor(private http: HttpClient) {
        
    }
   
    postUserLogin(data: any) {
        return this.http.post(environment.BASE_URL + '/user-login/', data).map(res => res);
    }
}