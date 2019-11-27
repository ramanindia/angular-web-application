import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
   { path: '', component: HomeComponent,pathMatch: 'full' } ,
   { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: ':slug', component: PageComponent},

   //{ path: 'team', component: PageComponent },
  // { path: 'page/:slug', component: PageComponent},

  
   // { path: 'about', component: AboutusComponent },
  // { path: 'services', component: ServicesComponent },
  //{ path: 'team', component: PageComponent },
  
 /* { path: 'login', component: LoginComponent },
  { path: 'list', component: UserlistComponent },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }