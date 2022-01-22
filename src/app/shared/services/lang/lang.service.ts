import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  private lang = new BehaviorSubject('');;
  currentLang = this.lang.asObservable();
  constructor() { }
  changeLang(lang: string) {
    this.lang.next(lang);
  }
}
