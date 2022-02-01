import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  private parents:any[] = [];
  private _listParentsApiUrl = "api/parents.json";
  constructor(private http:HttpClient) { }
  getParents(){
    return this.http.get(`${environment.baseUrl}${this._listParentsApiUrl}`).pipe(map((res:any) => res['data']))
  }
}
