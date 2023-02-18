import { ShipsService } from 'src/app/services/ships.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class StarshipDetailComponent implements OnInit{
  starshipDetail: any;
  id:number = 0;
  constructor(private shipService: ShipsService){}

  ngOnInit(): void {
  this.shipService.getDetail(this.id).subscribe(resp => {
    this.starshipDetail = resp;
  });

}

}
