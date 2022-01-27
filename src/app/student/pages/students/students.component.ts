import { Component, OnInit, ViewChild } from '@angular/core';

import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { Student } from 'src/app/shared/interfaces/student';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { LangService } from 'src/app/shared/services/lang/lang.service';
import { StudentService } from 'src/app/shared/services/student/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students:Student[] = [];
  lang:any;
  display:boolean = false;
  // @ViewChild(ConfirmDialogComponent)confirmDialogComponent!: ConfirmDialogComponent;
  constructor(private studentService:StudentService,private langService:LangService,private dialogService:DialogService) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudents()
    // List Students
    // this.studentService.getStudents().subscribe((result:any)=>{
    //   console.log(result)
    //   // this.students = result
    // })
    this.langService.currentLang.subscribe((result:any)=>{
      this.lang = result
    })
  }
  opendialog(){
    this.dialogService.toggleDisplayDialog(false)
    this.dialogService.toggleDisplayDialog(true)
  }
  onPageChange(event:any){
    console.log(event)
  }
  onOpenConfirmDialog(event:any){
    // this.confirmDialogComponent.openConfirmDialog();
    console.log("students component !")
  }
  delete(){
    alert('delete')
  }
}
