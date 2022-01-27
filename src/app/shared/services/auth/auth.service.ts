import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginApiUrl = "api/users/token.json";

  constructor(private _HttpClient: HttpClient) {}

  Login(loginData: any): Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}${this._loginApiUrl}`,loginData);
  }
  logout(){
    localStorage.removeItem('token')
  }
}
