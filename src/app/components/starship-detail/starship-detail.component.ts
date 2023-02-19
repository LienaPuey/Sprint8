import { ShipsService, StarshipDetail } from 'src/app/services/ships.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class StarshipDetailComponent implements OnInit{
  starshipDetail: StarshipDetail | undefined;
  id:string='';
  constructor(private shipService: ShipsService, private root: ActivatedRoute){}

  ngOnInit(): void {
    this.root.paramMap.subscribe(params => {
      this.id = params.get('id')!;
      this.shipService.getDetail(this.id).subscribe(resp => {
        if(resp.results.length >0 ){
          this.starshipDetail = resp.results[0];
        }
      });
    })
    

  }

}
