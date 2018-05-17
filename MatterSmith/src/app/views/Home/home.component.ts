import { Component,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent} from '../../app.component';
import { HttpClient } from "@angular/common/http";
import { DataTable, DataTableResource } from '../data-table';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@Component({
  templateUrl: 'home.component.html',
  styleUrls:['home.component.scss']
})
export class DashboardComponent {
  transactions: {
    date: Date,
    label: string,
    amount: number
  }[];
  public imagesUrl;
  

  constructor(private httpClient: HttpClient ) {

  
   }
    ngOnInit() {
    this.imagesUrl = [
    'https://lh3.googleusercontent.com/R2364KHYz5uG5roXvissotGJF5vT8RZ36V3fSFFuvQMVlEr_gHgomCjOFKAh-wgyjOJxZg=s169',
    'https://media.npr.org/assets/img/2015/01/09/avatars-wide-promo_custom-bde4ba32e1ef5b0462ee1bf65a2d25f64eb26435-s800-c85.jpg',
    
    ];

     this.transactions = [
      {
        date: new Date(2017, 10, 10, 13, 10, 15),
        label: 'Third transaction',
        amount: 130
      },
      {
        date: new Date(2017, 7, 3, 9, 35, 0),
        label: 'Second transaction',
        amount: 130
      },
      
    ]
  
  }
  

    


}
