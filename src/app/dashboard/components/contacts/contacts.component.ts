import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { ContactsFormComponent } from './contacts-form/contacts-form.component';
import { Contact } from '../../models/contacts.model';
import { getAllContacts } from '../../store/dashboard.selectors';
import { Observable } from 'rxjs';
import { DeleteAlertComponent } from './delete-alert/delete-alert.component';
import { contactActionTypes } from '../../store/dashboard.actions';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts$: Observable<Contact[]>;
  searchText:string
  constructor(private modalService: NgbModal, private store: Store<AppState>) {}

  ngOnInit(): void {
     this.contacts$ = this.store.select(getAllContacts);
  }

  open(contact?:Contact) {
    const modalRef = this.modalService.open(ContactsFormComponent);
    modalRef.componentInstance.contact = contact

  }

  delete(contact){
    const modalRef = this.modalService.open(DeleteAlertComponent);
    modalRef.componentInstance.contact = contact
  }


}
