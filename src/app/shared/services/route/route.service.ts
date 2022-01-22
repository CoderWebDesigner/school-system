import { Injectable } from '@angular/core';
import { Route } from '../../interfaces/route';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private routes:Route[] = [
    {linkText:'الرئيسية',path:'/dashboard',icon:'icon-home'},
    {linkText:'الطلاب',path:'/studients',icon:'icon-students'},
    {linkText:'اولياء الامور',path:'/parents',icon:'icon-parents'},
    {linkText:'المعلمين',path:'/teachers',icon:'icon-teacher'},
    {linkText:'التقارير',path:'/reports',icon:'icon-business-report'},
    {linkText:'الحسابات',path:'/accounts',icon:'icon-accounts'}
  ]
  constructor() { }
  getRoutes(){
    return this.routes
  }
}
