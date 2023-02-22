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
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'starships', component: StarshipsComponent},
  {path: 'starshipsdetail/:id', component: StarshipDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarshipsComponent,
    StarshipDetailComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
