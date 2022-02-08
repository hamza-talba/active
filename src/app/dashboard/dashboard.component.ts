import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/reducers';
import { loadingSelector } from './store/dashboard.selectors';

@Component({
  selector: 'app-dashboard',
  template:`
    <app-main-layout>
      <div class="spinner-border m-5" style="position: absolute;left:30%;top:30%;width:11rem;height:11rem;z-index:1000000000" role="status"
        *ngIf="loading$|async"
      >
        <span class="sr-only">Loading...</span>
      </div>
      <router-outlet></router-outlet>
    </app-main-layout>
  `
})
export class DashboardComponent implements OnInit {
  loading$:Observable<boolean>
  constructor(private store:Store<AppState> ) {

  }

  ngOnInit() {
    this.loading$ = this.store.select(loadingSelector)
  }

}
