import { ShipsService } from 'src/app/services/ships.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


interface StarshipDetail {
name: string,
model: string,
manufacturer: string;
cost: string;
length: number;
maxSpeed: number;
crew: string;
passengers: number;
capacity: number;
consumables: string;
rating: string;
mglt: number;
class: string;
}

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class StarshipDetailComponent implements OnInit{
  starshipId: string = '';
  starshipDetail!: StarshipDetail;
  constructor(private route: ActivatedRoute, private http: HttpClient, private shipService: ShipsService){}
ngOnInit(): void {
  // this.shipService.getDetail()
  // .then((resp:any) => {
  //   console.log
  // })
    this.starshipId = this.route.snapshot.queryParamMap.get('id') ?? '';
  
  console.log(this.starshipId, 'id');
  this.http.get(this.starshipId).subscribe((resp:any)=>{
    this.starshipDetail=resp;
  })

}
}
