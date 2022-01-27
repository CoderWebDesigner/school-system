import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  constructor(private _Router:Router) { }

  canActivate():boolean|Observable<boolean>{
    var token = localStorage.getItem('token');
    if(token)
    {
      return true
    }
    this._Router.navigateByUrl("");
    return false;
   }

}
