import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  constructor( private http: HttpClient ) { }

  getShips(){
    return this.http.get('https://swapi.dev/api/starships/').toPromise();
  }
}
