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
  lang: any;
  students: Student[] = [];
  calendarOptions!: CalendarOptions;
  dialogType!: string;
  display!: boolean;
  files:any[] = []
  constructor(
    private activedRoute: ActivatedRoute,
    private langService: LangService,
    private studentService: StudentService,
    private dialogService:DialogService
  ) {}

  ngOnInit(): void {
    console.log(this.student);
    this.students = this.studentService.getStudents();
    this.langService.currentLang.subscribe((result: any) => {
      this.lang = result;
    });
    let id = this.activedRoute.snapshot.params['id'];
    this.student = this.students.find((e: Student) => e.id == id);
  }
  opendialog(type:any){
    this.dialogService.toggleDisplayDialog(true)
    this.dialogType = type;
  }
}
