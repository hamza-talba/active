 import { Injectable } from '@angular/core';
 import { Observable, of } from 'rxjs';
 import { Contact } from '../models/contacts.model';
 import * as uuid from 'uuid'
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn:"root"
})
export class ContactService {
  data = [
    {id: uuid.v4(), name: "ahmad", phone:"01212567589",email:"Ahmad@mail.com",favorite:false}
    ,{id: uuid.v4(), name: "hamza", phone:"12345678",email:"hamza@mail.com",favorite:true}
  ]

  getAllContacts(): Observable<Contact[]> {
    return of(this.data).pipe(delay(1500))
  }

  createContact(contact: Contact): Observable<Contact> {
    return of(contact).pipe(delay(1500))
  }

  deleteContact(contactId: string): Observable<string> {
    return of(contactId).pipe(delay(1500))
  }

  updateContact(contactId: string | number, changes: Partial<Contact>): Observable<string | number> {
    return of(contactId).pipe(delay(1500))
  }
}

