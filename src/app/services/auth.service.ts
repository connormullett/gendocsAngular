import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/registerUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Token } from '../models/token';
import { Observable, Subject } from 'rxjs';
import { UserLogin } from '../models/userLogin';
import { User } from '../models/user';

export const API_URL = 'http://localhost:5000/v1/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

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
      localStorage.setItem('id_token', token.token);
      this.isLoggedIn.next(true);
      this._router.navigate(['/'])
    });
  }

  getMe() {
    return this._http.get(`${API_URL}/me`, { headers: this.setHeaders() });
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);
    this._router.navigate(['/login']);
  }

  currentUser(): Observable<Object> {
    if(!localStorage.getItem('id_token')) { return new Observable(o => o.next(false)); }

    return this._http.get(`${API_URL}/me`, { headers: this.setHeaders() });
  }

  username() {
    return this._http.get(`${API_URL}/me`, { headers: this.setHeaders() });
  }

  setHeaders() {
    return new HttpHeaders().set('api-token', `${localStorage.getItem('id_token')}`);
  }
}
