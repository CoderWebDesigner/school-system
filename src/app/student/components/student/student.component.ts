import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Student } from 'src/app/shared/interfaces/student';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { LangService } from 'src/app/shared/services/lang/lang.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  display:boolean = false;
  lang: any;
  // dialogType!:string;
  // studentId!:number;
  @Output() getStudentId = new EventEmitter<number>();
  @Output() getDialogType = new EventEmitter<string>();
  @Input() student!: Student;
  @Output() openConfirmDialog = new EventEmitter()
  dialogHeader!: string;
  imageSrc: any = "../../assets/images/icons/user.png";
  constructor(private langService: LangService,private dialogService:DialogService) {}

  ngOnInit(): void {
    this.langService.currentLang.subscribe((result: any) => {
      this.lang = result;
    });
  }
  openDialog(type:string,id:number){
    this.dialogService.toggleDisplayDialog(true)
    this.getDialogType.emit(type);
    this.getStudentId.emit(id);
  }
}
