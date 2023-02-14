import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  ngOnInit(): void {
    this.shipService.getShips();
    this.starshipsList= this.shipService.starshipsList;
    console.log(this.starshipsList);
  }
  starshipsList: any []=[];
  constructor( private shipService : ShipsService){}

}
