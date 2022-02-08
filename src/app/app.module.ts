import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
 import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ContactsResolver } from './dashboard/resolver/contacts.resolver';

@NgModule({
  declarations: [
      AppComponent,
       ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    StoreDevtoolsModule.instrument({maxAge: 25}),
  ],
  providers: [ContactsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
