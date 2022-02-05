import { Component, OnInit, ViewChild } from '@angular/core';

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
  studentId!:number;
  dialogType!:string;
  loading:boolean = false
  constructor(private studentService:StudentService,private langService:LangService,private dialogService:DialogService) { }

  ngOnInit(): void {
    // this.students = this.studentService.getStudents()
    // List Students
    this.studentService.getStudents().subscribe((result:any)=>{
      console.log(result)
      this.students = result
      this.loading = false
    })
    this.langService.currentLang.subscribe((result:any)=>{
      this.lang = result
    })
  }
  opendialog(type:any){
    this.dialogService.toggleDisplayDialog(true)
    this.dialogType = type;
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }
  getType(type:any){
    this.dialogType = type;
  }
  getId(id:any){
    this.studentId = id;
  }
}
