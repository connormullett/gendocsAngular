import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http: HttpClient, private _router: Router) { }

  get_docs(){
    
  }
}
