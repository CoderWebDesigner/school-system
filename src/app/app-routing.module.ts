import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthlayoutComponent } from './shared/components/authlayout/authlayout.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { LayoutheaderComponent } from './shared/components/layoutheader/layoutheader.component';
import { AuthGuardService } from './shared/services/auth-guard/auth-guard.service';

const routes: Routes = [
  {path:'website-categories',component:LayoutheaderComponent,children:[
    {path:'',loadChildren:()=>import('./websitecategories/websitecategories.module').then(m=>m.WebsitecategoriesModule),canActivate:[AuthGuardService]}
  ]},
  {path:'dashboard',component:LayoutComponent,children:[
    {path:'',loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule),canActivate:[AuthGuardService]}
  ]},
  {path:'students',component:LayoutComponent,children:[
    {path:'',loadChildren:()=>import('./student/student.module').then(m=>m.StudentModule),canActivate:[AuthGuardService]}
  ]},
  {path:'',component:AuthlayoutComponent,children:[
    {path:'',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)}
  ]}

  // {path:'',redirectTo:'website-categories',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
