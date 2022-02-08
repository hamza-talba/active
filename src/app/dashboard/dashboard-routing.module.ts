import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FavoriteContactsComponent } from './components/favorite-contacts/favorite-contacts.component';

const routes: Routes = [
{
  path: "",
  component: DashboardComponent ,
  children:[
    {
      path:"contacts",
      component:ContactsComponent,

     },
    {
      path:"favorite-contacts",
      component:FavoriteContactsComponent,

     },
     {
      path:"**",
      redirectTo:"contacts"
    }
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
