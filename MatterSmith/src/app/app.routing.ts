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
  
  { path: 'contact-us',component: FullLayoutComponent, loadChildren: './views/contact-us/contact.module#UserModule' },
  { path: 'services',component: FullLayoutComponent, loadChildren: './views/services/services.module#ServiceModule' },
  { path: 'review',component: FullLayoutComponent, loadChildren: './views/review/review.module#ReviewModule' },
   { path: 'Knowledge',component: FullLayoutComponent, loadChildren: './views/knowlege/knowlege.module#KnowlegeModule' },
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
  { path: "login",loadChildren: './login/login.module#LoginModule'},
  { path: "admin",component: SimpleLayoutComponent,loadChildren: './admin/admin.module#AdminModule'},
  { path: "superadmin",component: SimpleLayoutComponent,  loadChildren: './superadmin/superadmin.module#SuperAdminModule'},

  
   

];





@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}