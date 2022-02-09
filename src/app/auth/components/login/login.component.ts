import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  contactsForm: FormGroup;
  alert={
    active:false,
    message:"",
    type:""
  }
  constructor( private authService:AuthService,private router:Router) {
    this.contactsForm = new FormGroup({
      email: new FormControl("", [Validators.required,Validators.email] ),
      password: new FormControl("", Validators.required),
    });
  }
  ngOnInit(): void {

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

  submit(){
    if(this.contactsForm.invalid){
      this.contactsForm.markAllAsTouched();
      return
    }
    this.authService.login({...this.contactsForm.value}).subscribe(
      res => {
        this.alert.type="success"
        this.alert.message="Welcome"
        this.alert.active = true
        localStorage.setItem("token","active")
        this.router.navigateByUrl("/dashboard/contacts")

      }
    ,err => {
      this.alert.type="danger"
        this.alert.message=err
        this.alert.active = true
    }
    )
  }
}
