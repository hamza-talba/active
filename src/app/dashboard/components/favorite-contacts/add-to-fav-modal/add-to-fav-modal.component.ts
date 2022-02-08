import { Component, OnInit } from '@angular/core';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/dashboard/models/contacts.model';
import { getAllContacts } from 'src/app/dashboard/store/dashboard.selectors';
import { AppState } from 'src/app/store/reducers';
import { contactActionTypes } from '../../../store/dashboard.actions';

@Component({
  selector: 'app-add-to-fav-modal',
  templateUrl: './add-to-fav-modal.component.html',
  styleUrls: ['./add-to-fav-modal.component.scss']
})
export class AddToFavModalComponent implements OnInit {
  contacts$: Observable<Contact[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.contacts$ = this.store.select(getAllContacts)
  }

  changeFavStatus(contact:Contact){
    contact.favorite = !contact.favorite
    const update: Update<Contact> = {
      id:contact.id,
      changes: {
        ...contact
      }
    };
    this.store.dispatch(contactActionTypes.updateContact({update}));
  }

}
