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
  starshipImgs: any []=[];
  img='';

  constructor(private shipService: ShipsService, private root: ActivatedRoute){}

  ngOnInit(): void {
    this.root.paramMap.subscribe(params => {
      this.id = params.get('id')!;
      this.shipService.getDetail(this.id).subscribe(resp => {
        console.log(resp);
        this.starshipDetail = resp;
      });
    })
    
    this.shipService.getImg()
    .subscribe((resp: any)=>{
      this.starshipImgs = resp.naves.nave;
      this.starshipImgs.forEach(nave =>{
        if (nave.name === this.starshipDetail?.name) {
          this.img = nave.img;
        }
      })

    })

  }

}
