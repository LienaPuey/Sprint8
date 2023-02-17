import { ShipsService } from 'src/app/services/ships.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class StarshipDetailComponent implements OnInit{
  starshipId: string = '';
  starshipDetail: any;
  constructor(private shipService: ShipsService){}
ngOnInit(): void {
  this.shipService.getDetail()
  .then((resp:any)=>{
    console.log(resp, 'resultado');
    this.starshipDetail = resp;
  });


}
}
