import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

declare var $: any;

@Component({
  selector: 'sa-header',
  templateUrl: './sa-header.component.html',
  styleUrls:['sa-header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(["/home"])
    
  }
}