import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  starshipId: string = '';
  constructor( private http: HttpClient, private route: ActivatedRoute ) { }

  getShips(){
    return this.http.get('https://swapi.dev/api/starships/').toPromise();
  }
// https://starpi.herokuapp.com/
  getDetail(){
    this.starshipId = this.route.snapshot.queryParamMap.get('id') ?? '';
  
    console.log(this.starshipId, 'id');
    this.http.get(this.starshipId).toPromise();
  }
}
