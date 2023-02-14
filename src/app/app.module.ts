import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { RouterModule, Routes } from '@angular/router';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'starships', component: StarshipsComponent},
  {path: 'starshipsdetail', component: StarshipDetailComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarshipsComponent,
    StarshipDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
