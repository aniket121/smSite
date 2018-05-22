import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { Cookie } from 'ng2-cookies/ng2-cookies';
declare var $: any;

@Component({
  selector: 'sa-header',
  templateUrl: './sa-header.component.html',
  styleUrls:['sa-header.component.scss']
})
export class HeaderComponent implements OnInit {
  public username:any;
  constructor(private router: Router) {
  }

  ngOnInit() {
   this.username=Cookie.get("username")
  }
  logout()
  {
    localStorage.clear();
    Cookie.deleteAll()
    this.router.navigate(["/home"])
    
  }
}