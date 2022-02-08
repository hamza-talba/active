import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { getAllContacts } from '../../store/dashboard.selectors';
import { AddToFavModalComponent } from './add-to-fav-modal/add-to-fav-modal.component';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contacts.model';
import { filter, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-favorite-contacts',
  templateUrl: './favorite-contacts.component.html',
  styleUrls: ['./favorite-contacts.component.scss']
})
export class FavoriteContactsComponent implements OnInit {
  contacts$: Observable<Contact[]>;
  constructor(private modalService: NgbModal, private store: Store<AppState>) {}

  ngOnInit(): void {
     this.contacts$ = this.store.select(getAllContacts).pipe(map((res:Contact[]) => res.filter(i => i.favorite == true)));
  }

  open() {
    const modalRef = this.modalService.open(AddToFavModalComponent,{size:'lg'});
    modalRef.componentInstance.name = 'World';
  }
}
