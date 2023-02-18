import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  starshipId: string = '';
  constructor( private http: HttpClient, private route: ActivatedRoute ) { 

  }

  getShips(): Observable<Object>{
    return this.http.get('https://starpi.herokuapp.com/starpi/starships/');
  }

  getDetail(id:number):Observable<Object>{

    return this.http.get(`https://starpi.herokuapp.com/starpi/starships/${id}`)
  }


}
