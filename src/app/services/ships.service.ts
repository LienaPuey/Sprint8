import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface StarshipDetail {
  name: string;
  img: string;
  desc: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface DetailsResponse {
  count: number;
  next: string;
  previous?: any;
  results: StarshipDetail[];
}




@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor( private http: HttpClient, private route: ActivatedRoute ) { 

  }

  getShips(): Observable<Object>{
    return this.http.get('https://starpi.herokuapp.com/starpi/starships/');
  }

  getDetail(id:string):Observable<DetailsResponse>{

    return this.http.get<DetailsResponse>(`https://starpi.herokuapp.com/starpi/starships/${id}`);
  }


}
