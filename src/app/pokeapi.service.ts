import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class pokeapi {
  private urlApi = 'https://rickandmortyapi.com/api/character'

  constructor(private http: HttpClient) { }

  getData(page:any): Observable<any>{
    return this.http.get(`${this.urlApi}/?page=${page}`);
  }
}