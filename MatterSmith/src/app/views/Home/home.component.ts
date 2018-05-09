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

  constructor(private httpClient: HttpClient ) {

  
   }
    ngOnInit() {
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
