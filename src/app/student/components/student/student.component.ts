import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Student } from 'src/app/shared/interfaces/student';
import { LangService } from 'src/app/shared/services/lang/lang.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  display:boolean = false;
  lang: any;
  @Input() student!: Student;
  @Output() openConfirmDialog = new EventEmitter()
  dialogHeader!: string;
  constructor(private langService: LangService) {}

  ngOnInit(): void {
    this.langService.currentLang.subscribe((result: any) => {
      this.lang = result;
      console.log(this.lang);
    });
  }
  confirmDialog(id: number) {
    this.openConfirmDialog.emit(id)
   console.log("student component !")
  }
}
