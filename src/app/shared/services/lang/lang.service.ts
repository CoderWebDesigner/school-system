import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  private lang = new BehaviorSubject('');;
  currentLang = this.lang.asObservable();
  private langs:any[] =[
    {langName:'en',langIcon:'../../../../assets/images/icons/en.png'},
    {langName:'ar',langIcon:'../../../../assets/images/icons/ar.jpg'},
  ]
  constructor() { }
  changeLang(lang: string) {
    this.lang.next(lang);
  }
  getLangs(){
    return this.langs
  }
}
