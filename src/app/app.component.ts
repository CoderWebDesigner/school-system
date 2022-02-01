import { AfterViewChecked, Component , ChangeDetectorRef, AfterViewInit} from '@angular/core';
import { LangService } from './shared/services/lang/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements AfterViewInit{
  title = 'school-managemnt';
  lang:any;
  constructor(private langService:LangService,private cdr: ChangeDetectorRef){

  }
  ngAfterViewInit() {
    this.langService.currentLang.subscribe((result:any)=>{
      this.lang = result;
      this.cdr.detectChanges();
    })
  }
}
