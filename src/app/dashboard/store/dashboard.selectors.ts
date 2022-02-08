 import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ContactState, selectAll } from './dashboard.reducers';

export const contactsFeatureSelector = createFeatureSelector<ContactState>('contact');

export const getAllContacts = createSelector(
  contactsFeatureSelector,
  selectAll
);

export const areContactsLoaded = createSelector(
  contactsFeatureSelector,
  state => state.contactsLoaded
);

export const loadingSelector = createSelector(contactsFeatureSelector,state => state.loading)
