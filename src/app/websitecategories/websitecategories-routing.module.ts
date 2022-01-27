import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsitecategoriesComponent } from './pages/websitecategories/websitecategories.component';

const routes: Routes = [
  {path:'',component:WebsitecategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsitecategoriesRoutingModule { }
