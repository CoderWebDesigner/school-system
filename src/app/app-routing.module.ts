import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {path:'dashboard',component:LayoutComponent,children:[
    {path:'',loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)}
  ]},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
