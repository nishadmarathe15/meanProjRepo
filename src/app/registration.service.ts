import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRegistration } from './user-registration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private posturl = '/api';
  

  constructor(private http : HttpClient) { }

  registerUser(newUserRegistrationObj):Observable<UserRegistration[]>{
    console.log("registration service starts");
    return this.http.post<UserRegistration[]>(this.posturl, newUserRegistrationObj).pipe(map(res => res));
  } 
 


}
