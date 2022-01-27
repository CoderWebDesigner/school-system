import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Route } from '../../interfaces/route';
import { LangService } from '../../services/lang/lang.service';
import { RouteService } from '../../services/route/route.service';

@Component({
  selector: 'app-headeronly',
  templateUrl: './headeronly.component.html',
  styleUrls: ['./headeronly.component.scss']
})
export class HeaderonlyComponent implements OnInit {
  direction:any = 'ltr';
  selectedLang: any;
  routes:Route[] = []
  langs:any[] = []
  constructor(private langService:LangService,private routeService:RouteService,private translate:TranslateService,private router:Router) { }

  ngOnInit(): void {
    this.direction = 'ltr';
    this.langService.changeLang(this.direction)
    this.langs = this.langService.getLangs()
    this.routes = this.routeService.getRoutes()
  }
  changeLang(){
    this.translate.use(this.selectedLang.langName)
    this.direction = (this.selectedLang.langName == "ar")?'rtl':'ltr';
    this.langService.changeLang(this.direction)
    localStorage.setItem('direction',this.direction)
  }
  logout(event:any){
    event.preventDefault()
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }
}
