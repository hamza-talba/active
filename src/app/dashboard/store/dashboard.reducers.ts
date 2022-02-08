 import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { contactActionTypes } from './dashboard.actions';

export interface ContactState extends EntityState<any> {
  contactsLoaded: boolean;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>();

export const initialState = adapter.getInitialState({
  contactsLoaded: false
});

export const contactReducer = createReducer(
  initialState,

  on(contactActionTypes.contactsLoaded, (state, action) => {
    return adapter.addMany(
      action.contacts,
      {...state, contactsLoaded: true}
    );
  }),

  on(contactActionTypes.createContact, (state, action) => {
    return adapter.addOne(action.contact, state);
  }),

  on(contactActionTypes.deleteContact, (state, action) => {
    return adapter.removeOne(action.contactId, state);
  }),

  on(contactActionTypes.updateContact, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
