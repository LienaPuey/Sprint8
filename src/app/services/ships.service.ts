import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  starshipsList = [];
  constructor( private http: HttpClient ) { }

  getShips(){
    return this.http.get('https://swapi.dev/api/starships/')
    .subscribe((resp : any)=> {
      console.log(resp.data);
      this.starshipsList = resp.data;
    })
  }
}
