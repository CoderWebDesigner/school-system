import { Injectable } from '@angular/core';
import { Stat } from '../../interfaces/stat';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  private stats:Stat[] = [
    {color:'#7b67ee',title:'المصروفات',value:10000,icon:'icon-expenses'},
    {color:'#54b8f9',title:'اولياء الامور',value:10000,icon:'icon-parents'},
    {color:'#fb9160',title:'التلاميذ',value:10000,icon:'icon-students'},
    {color:'#fa5584',title:'المعلمين',value:10000,icon:'icon-teacher'},
  ]
  constructor() { }
  getStats(){
    return this.stats
  }
}
