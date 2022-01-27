import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular';
import { Student } from 'src/app/shared/interfaces/student';
import { LangService } from 'src/app/shared/services/lang/lang.service';
import { StudentService } from 'src/app/shared/services/student/student.service';

@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.scss']
})
export class StudentinfoComponent implements OnInit {
  student!:any;
  value!: Date;
  lang:any;
  students:Student[] = []
  calendarOptions!: CalendarOptions;
  constructor(private activedRoute:ActivatedRoute,private langService:LangService,private studentService:StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudents()
    this.langService.currentLang.subscribe((result:any)=>{
      this.lang = result
    })
    let name = this.activedRoute.snapshot.params['id'];
    this.student = this.students.find((e:Student)=>e.id == this.activedRoute.snapshot.params['id'])
  }

}
