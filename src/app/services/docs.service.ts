import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL = 'http://localhost:5000/v1/docs'

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  constructor(private _http: HttpClient) {
  }

  getDocs() {
    return this._http.get(`${API_URL}/`, { headers: this.setHeaders() });
  }

  private setHeaders() {
    return new HttpHeaders().set('api-token', `${localStorage.getItem('id_token')}`);
  }
}


