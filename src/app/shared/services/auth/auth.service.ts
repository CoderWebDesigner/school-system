import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginApiUrl = "api/users/token.json";
  private isLoggedIn:boolean = false
  constructor(private _HttpClient: HttpClient) {}

  Login(loginData: any): Observable<any> {
    this.isLoggedIn = true
    return this._HttpClient.post(`${environment.baseUrl}${this._loginApiUrl}`,loginData);
  }
  checkLogin(){
    return this.isLoggedIn
  }
  logout(){
    this.isLoggedIn = false
    localStorage.removeItem('token')
  }
}
