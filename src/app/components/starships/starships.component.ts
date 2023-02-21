import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  nextPage= '';
  prevPage = '';
  ngOnInit(): void {
    
    this.shipService.getShips()
    .subscribe((resp:any) => {
      console.log(resp);
      this.starshipsList= resp.results;
      this.nextPage = resp.next;
      this.prevPage = resp.previous;
    });
  }

  getNextShips(){
    this.shipService.getShips(this.nextPage)
    .subscribe((resp:any)=>{
      this.starshipsList = [...resp.results];
      this.nextPage = resp.next;
      console.log(this.starshipsList);
    })
  }

  getPreviousShips(){
    this.shipService.getShips(this.prevPage)
    .subscribe((resp:any) => {
      if(this.prevPage === null){
        return
      }else{
        this.prevPage = resp.previous;
        console.log(resp.previous);
      }

    })
  }
  starshipsList: any []=[];
  constructor( private shipService : ShipsService){}

}
