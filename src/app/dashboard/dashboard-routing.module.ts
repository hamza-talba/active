import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FavoriteContactsComponent } from './components/favorite-contacts/favorite-contacts.component';
import { ContactsResolver } from './resolver/contacts.resolver';

const routes: Routes = [
{
  path: "",
  component: DashboardComponent ,
  children:[
    {
      path:"contacts",
      component:ContactsComponent,
      resolve: {
        contacts: ContactsResolver
      },
      pathMatch:'full'
    },
    {
      path:"favorite-contacts",
      component:FavoriteContactsComponent,
      resolve: {
        contacts: ContactsResolver
      },
      pathMatch:'full'
    }
  ]
},
  {
    path:"**",
    redirectTo:"/dashboard/contacts"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
