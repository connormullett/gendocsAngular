import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/registerUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Token } from '../models/token';
import { Observable, Subject } from 'rxjs';

const API_URL = 'http://localhost:5000/v1/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${API_URL}/`, regUserData);
  }

  login(loginInfo) {
    let data = {
      email: loginInfo.email,
      password: loginInfo.password
    };
    return this._http.post(`${API_URL}/login`, data).subscribe( (token: Token) => {
      console.log(token);
      localStorage.setItem('id_token', token.token);
      this._router.navigate(['/'])
    });
  }

  currentUser(): Observable<Object> {
    if(!localStorage.getItem('id_token')) { return new Observable(o => o.next(false)); }

    const authHeader = new HttpHeaders().set('api-token', `${localStorage.getItem('id_token')}`);

    return this._http.get(`${API_URL}/v1/users/me`, { headers: authHeader });
  }
}
