 import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { contactActionTypes, startLoading } from './dashboard.actions';

export interface ContactState extends EntityState<any> {
  contactsLoaded: boolean;
  loading:boolean
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>();

export const initialState = adapter.getInitialState({
  contactsLoaded: false,
  loading:true
});

export const contactReducer = createReducer(
  initialState,

  on(contactActionTypes.startLoading, (state) => {
    return {...state, loading:true}
  }),

  on(contactActionTypes.stopLoading, (state) => {
    return {...state, loading:false}
  }),

  on(contactActionTypes.contactsLoaded, (state, action) => {
    return adapter.addMany(
      action.contacts,
      {...state, contactsLoaded: true,loading:false}
    );
  }),

  on(contactActionTypes.createContact, (state, action) => {
    return adapter.addOne(action.contact, {...state, contactsLoaded: true});
  }),

  on(contactActionTypes.deleteContact, (state, action) => {
    return adapter.removeOne(action.contactId, {...state, contactsLoaded: true});
  }),

  on(contactActionTypes.updateContact, (state, action) => {
    return adapter.updateOne(action.update, {...state, contactsLoaded: true});
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
