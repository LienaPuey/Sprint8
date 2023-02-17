import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  starshipId: string = '';
  constructor( private http: HttpClient, private route: ActivatedRoute ) { 
    this.starshipId = this.route.snapshot.queryParamMap.get('id') ?? '';
  }

  getShips(): Promise<Object | undefined>{
    return this.http.get('https://starpi.herokuapp.com/starpi/starships/').toPromise();
  }

  getDetail(): Promise<Object | undefined>{

    return this.http.get(this.starshipId).toPromise();
  }


}
