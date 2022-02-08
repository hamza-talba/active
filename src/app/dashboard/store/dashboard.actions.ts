
import { createAction, props } from '@ngrx/store';
import {Update} from '@ngrx/entity';
import { Contact } from '../models/contacts.model';

export const startLoading = createAction(
  'Start Loader',
);

export const stopLoading = createAction(
  "Stop Loader",
);

export const loadContacts = createAction(
  '[Contacts List] Load Contacts via Service',
);

export const contactsLoaded = createAction(
  '[Contacts Effect] Contacts Loaded Successfully',
  props<{contacts:Contact[]}>()
);

export const createContact = createAction(
  '[Create Contact Component] Create Contact',
  props<{contact:Contact}>()
);

export const deleteContact = createAction(
  '[Contacts List Operations] Delete Contact',
  props<{contactId: string}>()
);

export const updateContact = createAction(
  '[Contacts List Operations] Update Contact',
  props<{update: Update<Contact>}>()
);

export const contactActionTypes = {
  startLoading,
  stopLoading,
  loadContacts,
  contactsLoaded,
  createContact,
  deleteContact,
  updateContact
};
