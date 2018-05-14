import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ServiceComponent } from './services.component';
import { ServiceRoutingModule } from './services-routing.module';
import { FormsModule } from '@angular/forms'
import {PasswordModule} from 'primeng/password';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { ServicesService } from './services.service';

@NgModule({
  imports: [
    ServiceRoutingModule,
    FormsModule,
    PasswordModule,
    HttpClientModule,
    CommonModule    
    // ChartsModule
  ],
  
  declarations: [ ServiceComponent ]
})
export class ServiceModule { }
