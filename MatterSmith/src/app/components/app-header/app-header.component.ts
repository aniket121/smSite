import { Component } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls:['app-header.component.scss']
})
export class AppHeaderComponent { 
  username:string = '';
  role_type:string=''
  public all_routing:any = {};
  constructor() {
      this.role_type = Cookie.get("role_type");
      this.username = Cookie.get("username")
   }

  
  logOut(){
     localStorage.clear();
     Cookie.deleteAll();
     window.location.href="/"
  }
}
