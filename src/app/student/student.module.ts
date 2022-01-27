import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentsComponent } from './pages/students/students.component';
import { SharedModule } from '../shared/shared.module';
import { StudentComponent } from './components/student/student.component';
import { StudentinfoComponent } from './pages/studentinfo/studentinfo.component';
import { ConfirmationService } from 'primeng/api';
import { AddstudentComponent } from './components/addstudent/addstudent.component';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentComponent,
    StudentinfoComponent,
    AddstudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ],
  providers:[ConfirmationService]
})
export class StudentModule { }
