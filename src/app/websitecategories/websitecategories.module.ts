import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsitecategoriesRoutingModule } from './websitecategories-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WebsitecategoryComponent } from './components/websitecategory/websitecategory.component';
import { WebsitecategoriesComponent } from './pages/websitecategories/websitecategories.component';


@NgModule({
  declarations: [
    WebsitecategoryComponent,
    WebsitecategoriesComponent
  ],
  imports: [
    CommonModule,
    WebsitecategoriesRoutingModule,
    SharedModule
  ]
})
export class WebsitecategoriesModule { }
