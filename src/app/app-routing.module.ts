import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ContactComponent} from './contact/contact.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ApiComponent} from './api/api.component';
import {ShowDataComponent} from './api/show-data/show-data.component';
import {EmailComponent} from './email/email.component';

const routes: Routes = [
  {path: 'zaloguj', component: LoginComponent},
  {path: 'orzeczenia', component: ApiComponent},
  {path: 'orzeczenia/:id', component: ShowDataComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'konto', component: DashboardComponent},
  {path: 'email-verify', component: EmailComponent},
  {path: '', redirectTo: '/zaloguj', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
