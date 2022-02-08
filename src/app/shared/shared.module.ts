import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsTableComponent } from './components/contacts-table/contacts-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  declarations: [ContactsTableComponent,PhonePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ContactsTableComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
