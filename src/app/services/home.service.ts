import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

const API_URL = 'http://localhost:5000'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http: HttpClient, private _router: Router) { }

  get_docs(){
    return this._http.get(`${API_URL}/v1/docs/`);
  }

  get_recent_docs(){
    
  }

  search(term: string){

  }
}
