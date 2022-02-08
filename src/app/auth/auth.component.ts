import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/reducers';

@Component({
  selector: 'app-auth',
  template:`

      <router-outlet></router-outlet>

  `
})
export class AuthComponent implements OnInit {
  loading$:Observable<boolean>
  constructor() {

  }

  ngOnInit() {
   }

}
