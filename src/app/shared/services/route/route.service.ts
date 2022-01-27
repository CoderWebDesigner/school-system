import { Injectable } from '@angular/core';
import { Route } from '../../interfaces/route';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private routes:Route[] = [
    {linkTextAr:'الرئيسية',linkTextEn:'Home',color:'#55efc4',path:'/dashboard',icon:'icon-home'},
    {linkTextAr:'الطلاب',linkTextEn:'Students',color:'#81ecec',path:'/students',icon:'icon-students'},
    {linkTextAr:'اولياء الامور',linkTextEn:'Parents',color:'#74b9ff',path:'/parents',icon:'icon-parents'},
    {linkTextAr:'المعلمين',linkTextEn:'Teachers',color:'#a29bfe',path:'/teachers',icon:'icon-teacher'},
    {linkTextAr:'التقارير',linkTextEn:'Reports',color:'#fdcb6e',path:'/reports',icon:'icon-business-report'},
    {linkTextAr:'الحسابات',linkTextEn:'Accounts',color:'#ff7675',path:'/accounts',icon:'icon-accounts'}
  ]
  constructor() { }
  getRoutes(){
    return this.routes
  }
}
