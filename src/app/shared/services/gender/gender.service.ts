import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  private gender:any[] = [
    {id:1,nameAr:'ذكر',nameEn:'male',icon:'icon-male'},
    {id:2,nameAr:'أنثي',nameEn:'female',icon:'icon-female'}
  ]
  constructor() { }
  getGender(){
    return this.gender
  }
}
