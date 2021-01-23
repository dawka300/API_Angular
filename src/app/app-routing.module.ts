import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ContactComponent} from './contact/contact.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ApiComponent} from './api/api.component';

const routes: Routes = [
  {path: '', redirectTo: '/zaloguj', pathMatch: 'full'},
  {path: 'zaloguj', component: LoginComponent},
  {path: 'orzeczenia', component: ApiComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'konto', component: DashboardComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
