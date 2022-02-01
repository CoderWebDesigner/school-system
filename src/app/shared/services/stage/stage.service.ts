import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  private stages:any[] = []
  private _listStagesApiUrl = "api/stages.json";
  constructor(private http:HttpClient) { }
  getStages(){
    return this.http.get(`${environment.baseUrl}${this._listStagesApiUrl}`).pipe(map((result:any)=>result['data']))
  }
}
