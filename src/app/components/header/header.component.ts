import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isLoggedIn$ = this.usersService.isLoggedIn$;
  ngOnInit(): void {
  }

  constructor(private usersService: UsersService){}
}
