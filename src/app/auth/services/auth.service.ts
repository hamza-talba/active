import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(loginData): Observable<boolean> {
    if(loginData.email == "admin@mail.com" && loginData.password == "123456" ){
      return of(true).pipe(delay(1500))
    }else{
      return throwError("Error , Email Or Password Are Wronge !").pipe(delay(1500))
    }
  }
}
