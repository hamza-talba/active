import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template:`
    <app-main-layout>
      <router-outlet></router-outlet>
    </app-main-layout>
  `
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
