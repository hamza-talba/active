  import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { contactActionTypes } from './dashboard.actions';
import { Contact } from '../models/contacts.model';
import { ContactService } from '../services/contacts.service';

@Injectable()
export class ContactEffects {

  loadContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(contactActionTypes.loadContacts),
      concatMap(() => this.contactService.getAllContacts()),
      map((contacts:Contact[]) => contactActionTypes.contactsLoaded({contacts})),
    )
  );

  createContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(contactActionTypes.createContact),
      concatMap((action) => this.contactService.createContact(action.contact)),
      map(() => contactActionTypes.stopLoading())
    )
   );

  deleteContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(contactActionTypes.deleteContact),
      concatMap((action) => this.contactService.deleteContact(action.contactId)),
      map(() => contactActionTypes.stopLoading())
    )
  );

  updateContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(contactActionTypes.updateContact),
      concatMap((action) => this.contactService.updateContact(action.update.id, action.update.changes)),
      map(() => contactActionTypes.stopLoading())
    )
  );

  constructor(private contactService: ContactService, private actions$: Actions, private router: Router) {}
}
