import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';


// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  
  { path: 'home',component: FullLayoutComponent, loadChildren: './views/Home/home.module#DashboardModule'  },
  { path: 'about-us',component: FullLayoutComponent,loadChildren: './views/about-us/about.module#CustomerModule' },
  { path: 'contact-us',component: FullLayoutComponent, loadChildren: './views/contact-us/contact.module#UserModule' },
   {
    path: 'pages',
    component: SimpleLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  },
  
   

];





@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}