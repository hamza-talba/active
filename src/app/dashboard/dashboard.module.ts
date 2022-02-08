import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FavoriteContactsComponent } from './components/favorite-contacts/favorite-contacts.component';
import { SharedModule } from '../shared/shared.module';
import { ContactsFormComponent } from './components/contacts/contacts-form/contacts-form.component';
import { AddToFavModalComponent } from './components/favorite-contacts/add-to-fav-modal/add-to-fav-modal.component';
import { contactReducer } from './store/dashboard.reducers';
import { ContactEffects } from './store/dashboard.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ContactService } from './services/contacts.service';
import { DeleteAlertComponent } from './components/contacts/delete-alert/delete-alert.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    ContactsComponent,
    FavoriteContactsComponent,
    ContactsFormComponent,
    AddToFavModalComponent,
    DeleteAlertComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    LayoutModule,
    DashboardRoutingModule,
    SharedModule,
    StoreModule.forFeature('contact', contactReducer),
    EffectsModule.forFeature([ContactEffects])
  ],
})
export class DashboardModule { }
