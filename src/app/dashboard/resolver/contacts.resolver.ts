
 import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, tap} from 'rxjs/operators';
import { areContactsLoaded } from '../store/dashboard.selectors';
import { loadContacts } from '../store/dashboard.actions';
import { AppState } from '../../store/reducers/index';

@Injectable()
export class ContactsResolver implements Resolve<Observable<any>> {

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.store
    .pipe(
        select(areContactsLoaded),
        tap((contactsLoaded) => {
           if (!contactsLoaded) {
            this.store.dispatch(loadContacts());
          }
        }),
        filter(contactsLoaded => contactsLoaded),
        first()
    );
  }
}
