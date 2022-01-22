import { Component, Input, OnInit } from '@angular/core';
import { Route } from '../../interfaces/route';
import { RouteService } from '../../services/route/route.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  routes:Route[] = [];
  @Input() sideExpanded!:boolean;
  constructor(private routeService:RouteService) { }

  ngOnInit(): void {
    this.routes = this.routeService.getRoutes();
    this.sideExpanded = true
    console.log(this.sideExpanded)
  }
}
