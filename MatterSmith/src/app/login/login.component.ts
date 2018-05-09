import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LoginService } from './login.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';
  //remember me
  RememberMe:boolean = false;
  //client side validation
  usernameError:boolean = true;
  passwordError:boolean=true;
  //response validation
  validationError:boolean = true;
  //clent side status
  usernameStatus:boolean = false;
  passwordStatus:boolean = false;
    public login_state:boolean = false;
  public role_list:any;

  constructor(private router: Router,private loginService: LoginService) {
   }

  ngOnInit() {
  }

  login(){
    Cookie.deleteAll()
      if(this.username !='' && this.username.length >= 4){
                  this.usernameError = true;//error
                  this.usernameStatus = true; //status
                  this.validationError= true;
      }else{
        this.usernameError = false;
        this.usernameStatus = false;
        this.validationError= true;
      }
      if(this.password !=''  && this.password.length >= 4){
        this.passwordError = true;//error
        this.passwordStatus = true; //status
        this.validationError= true;

      }else{
        this.passwordError = false;
        this.passwordStatus = false;
        this.validationError= true;
      }

      if(this.usernameStatus && this.passwordStatus){
          if(this.RememberMe){
              Cookie.set("username",this.username)
              Cookie.set("password",this.password)
          }
        
          var data = {'username':this.username, 'password': this.password}
          
         
          // localStorage.setItem('url', 'login');
          Cookie.set("url",'login');
          Cookie.set("login", 'true')
          Cookie.set("dashboard", 'true')
          Cookie.set("users", 'false')
          Cookie.set("roles", 'true')
          Cookie.set("customers", 'true')
          console.log(Cookie.get("users"));
          this.loginService.postUserLogin(data).subscribe((res: any) => {

              Cookie.set("auth_token",res.auth_token)
              Cookie.set("username",res.username)
              if(res.roles.length>1){
                this.login_state = true;
                this.role_list = res.roles;
              }else{
                this.router.navigate(['dashboard']);
              }
              
            }, error => {
                this.validationError= false;
                console.info('error', error);

                this.router.navigate(['login']);
            })

      }
    
  }
  ngAfterViewInit(){
    if(Cookie.get("username") != null && Cookie.get("password") != null){
      this.username = Cookie.get("username");
      this.password = Cookie.get("password");
      this.login()

    }
 }

 SetRememberMe(value:any){
     if(value==1){
        this.RememberMe=true;
     }
  }

  selectRole($event){
    let element = event.currentTarget as HTMLInputElement;
    let name = element.value;
    console.log(name)
    if(name != '0'){
      Cookie.set("role_type",name)
      
    }
  }
  navigateDashboard()
  {
    if(Cookie.get("role_type"))
    {
      this.router.navigate(['dashboard']);
    }
  }
  
}
