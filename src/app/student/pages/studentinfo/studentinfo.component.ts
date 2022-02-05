import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular';
import { Student } from 'src/app/shared/interfaces/student';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { LangService } from 'src/app/shared/services/lang/lang.service';
import { StudentService } from 'src/app/shared/services/student/student.service';

@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.scss'],
})
export class StudentinfoComponent implements OnInit {
  student!: any;
  value!: Date;
  imageSrc: any = "../../assets/images/icons/user.png";
  lang: any;
  students: Student[] = [];
  calendarOptions!: CalendarOptions;
  dialogType!: string;
  display!: boolean;
  files: any[] = [];
  title!: string;
  examScore :any[]= [
    {id:1,date:'3/2/2022',stage:'اولي ثانوي',name :'عربي',score:30,total:50,status:1},
    {id:1,date:'3/2/2022',stage:'اولي ثانوي',name :'انجليزي',score:10,total:50,status:2},
  ]
  constructor(
    private activedRoute: ActivatedRoute,
    private langService: LangService,
    private studentService: StudentService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    // console.log(this.student);
    // this.students = this.studentService.getStudents();
    this.studentService.getStudents().subscribe((result:any)=>{
      this.students = result
    })
    this.langService.currentLang.subscribe((result: any) => {
      this.lang = result;
    });
    this.studentService.getStudentById(this.activedRoute.snapshot.params['id']).subscribe((result:any)=>{
      this.student = result.students[0];
      console.log(this.student)
    })


  }
  opendialog(type: any) {
    this.dialogService.toggleDisplayDialog(true);
    this.dialogType = type;
    this.getDialogTitle();
  }
  getDialogTitle() {
    switch (this.dialogType) {
      case 'addAttachment':
        this.title = 'students.attachments.add.title';
        break;
      case 'editAttachment':
        this.title = 'students.attachments.edit.title'
        break;
      case 'deleteAttachment':
        this.title = 'students.attachments.delete.title';
        break;
    }
  }
}
