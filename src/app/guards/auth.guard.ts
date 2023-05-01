import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { UsersService } from '../services/users.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard{
  constructor(private auth:UsersService, private router:Router) {

  }
  canActivate():boolean{
    if(this.auth.loggedIn()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;

  }
}