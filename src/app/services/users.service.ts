import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  signUpUsers:any[] = [];
  islogged:boolean = false;
  constructor() { }
  saveUsers(){

    localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));
    console.log(this.signUpUsers);
  }

  isLoged(){
    this.islogged=true;
  }
}
