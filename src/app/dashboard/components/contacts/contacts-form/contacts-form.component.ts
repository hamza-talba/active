import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { Contact } from '../../../models/contacts.model';
import { contactActionTypes, createContact, startLoading } from '../../../store/dashboard.actions';
import * as uuid from 'uuid'
@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent implements OnInit {
  @Input()contact:Contact
  contactsForm: FormGroup;

  constructor(public activeModal: NgbActiveModal,private store: Store<AppState>) {
    this.contactsForm = new FormGroup({
      name: new FormControl("", Validators.required),
      phone: new FormControl("", [Validators.required,Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$")]),
      email: new FormControl("", [Validators.required,Validators.email] ),
      favorite:new FormControl(),
     });
  }
  ngOnInit(): void {
    if(this.contact){
      this.contactsForm.patchValue({...this.contact})
    }
  }
  get contactsFormControls() {
    return this.contactsForm.controls;
  }

  hasValidator(control: string, validatorType: string): boolean {
    const validator = this.contactsForm.get(control).validator
      ? this.contactsForm.get(control).validator({} as AbstractControl)
      : "";
    if (validator && validator[validatorType]) {
      return true;
    }
    return false;
  }
  save(){
    if(this.contactsForm.invalid){
      this.contactsForm.markAllAsTouched();
      return
    }
    this.store.dispatch(startLoading());
    if(this.contact){
      const update: Update<Contact> = {
        id: this.contact.id,
        changes: {
          ...this.contactsForm.value
        }
      };
      this.store.dispatch(contactActionTypes.updateContact({update}));
    }else{
      const contact : Contact = {id: uuid.v4(),...this.contactsForm.value}
      this.store.dispatch(contactActionTypes.createContact({contact}));
    }
    this.activeModal.close()

  }
}
