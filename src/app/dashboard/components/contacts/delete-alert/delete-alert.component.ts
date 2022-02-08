import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Contact } from 'src/app/dashboard/models/contacts.model';
import { contactActionTypes } from 'src/app/dashboard/store/dashboard.actions';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-delete-alert',
  templateUrl: './delete-alert.component.html',
  styleUrls: ['./delete-alert.component.scss']
})
export class DeleteAlertComponent implements OnInit {
  @Input()contact:Contact

  constructor(public activeModal: NgbActiveModal,private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  delete(){
    const contactId = this.contact.id
    this.store.dispatch(contactActionTypes.deleteContact({contactId}));

  }
}
