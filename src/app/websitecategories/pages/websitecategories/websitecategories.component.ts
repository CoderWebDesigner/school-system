import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/shared/services/route/route.service';

@Component({
  selector: 'app-websitecategories',
  templateUrl: './websitecategories.component.html',
  styleUrls: ['./websitecategories.component.scss']
})
export class WebsitecategoriesComponent implements OnInit {
  categories:any[] = []
  constructor(private routeService:RouteService) { }

  ngOnInit(): void {
    this.categories = this.routeService.getRoutes()
  }

}
