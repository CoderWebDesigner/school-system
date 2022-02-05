import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentsComponent } from './pages/students/students.component';
import { SharedModule } from '../shared/shared.module';
import { StudentComponent } from './components/student/student.component';
import { StudentinfoComponent } from './pages/studentinfo/studentinfo.component';
import { ConfirmationService } from 'primeng/api';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { EditstudentComponent } from './components/editstudent/editstudent.component';
import { DeletestudentComponent } from './components/deletestudent/deletestudent.component';
import { AddattachmentComponent } from './components/addattachment/addattachment.component';
import { EditattachmentComponent } from './components/editattachment/editattachment.component';
import { DeleteattachmentComponent } from './components/deleteattachment/deleteattachment.component';
import { AddpaymentComponent } from './components/addpayment/addpayment.component';
import { EditpaymentComponent } from './components/editpayment/editpayment.component';
import { DeletepaymentComponent } from './components/deletepayment/deletepayment.component';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentComponent,
    StudentinfoComponent,
    AddstudentComponent,
    EditstudentComponent,
    DeletestudentComponent,
    AddattachmentComponent,
    EditattachmentComponent,
    DeleteattachmentComponent,
    AddpaymentComponent,
    EditpaymentComponent,
    DeletepaymentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ],
  providers:[ConfirmationService]
})
export class StudentModule { }
