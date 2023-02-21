import { Component, OnInit, ViewChild } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  nextPage= '';
  pageNumber = 1;
  starshipsList: any []=[];
  loadingShips :boolean = false;
  showGoToTopButton: boolean = true;
  @ViewChild('scrollingArea') scrollingArea: any;

  ngOnInit(): void {
    this.shipService.getShips()
    .subscribe((resp:any) => {
      console.log(resp);
      this.starshipsList= resp.results;
      this.nextPage = resp.next;
    });


  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const scrollingArea = this.scrollingArea.nativeElement;
    const offsetHeight = scrollingArea.offsetHeight;
    const scrollTop = scrollingArea.scrollTop;
    const scrollHeight = scrollingArea.scrollHeight;
  
    if (offsetHeight + scrollTop >= scrollHeight && !this.loadingShips && this.nextPage !== null) {
      this.loadingShips=true;
      this.pageNumber++;
      this.getNextShips();
    }
  }
  getNextShips(){
    const url = `https://swapi.dev/api/starships/?page=${this.pageNumber}`;
    this.shipService.getShips(url)
    .subscribe((resp:any)=>{
      this.starshipsList = [...this.starshipsList, ...resp.results];
      this.nextPage = resp.next;
      this.loadingShips = false;
      console.log(this.starshipsList);
    })
  }

  goToTop() {
    window.scrollTo(0, 0);
  }
  onScroll() {
    // Calcula el valor de `showGoToTopButton` en función de si el usuario ha hecho scroll o no
    this.showGoToTopButton = window.pageYOffset > 0;
    
    // Comprueba si se ha llegado al final de la página y carga más naves si es necesario
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      this.getNextShips();
    }
  }
    
  constructor( private shipService : ShipsService){}

}
