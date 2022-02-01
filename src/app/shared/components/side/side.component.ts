import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Route } from '../../interfaces/route';
import { LangService } from '../../services/lang/lang.service';
import { RouteService } from '../../services/route/route.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  routes:Route[] = [];
  lang:any;
  @Input() sideExpanded!:boolean;
  constructor(private routeService:RouteService,private langService:LangService,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.routes = this.routeService.getRoutes();
    this.sideExpanded = true
    this.langService.currentLang.subscribe((result:any)=>{
      this.lang = result;
      this.cdr.detectChanges();
    })
  }
}
