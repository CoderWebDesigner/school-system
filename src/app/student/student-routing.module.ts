import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentinfoComponent } from './pages/studentinfo/studentinfo.component';
import { StudentsComponent } from './pages/students/students.component';

const routes: Routes = [
  {path:'',component:StudentsComponent},
  {path:'info/:id',component:StudentinfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
