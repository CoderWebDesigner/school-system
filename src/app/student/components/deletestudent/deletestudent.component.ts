import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { StudentService } from 'src/app/shared/services/student/student.service';

@Component({
  selector: 'app-deletestudent',
  templateUrl: './deletestudent.component.html',
  styleUrls: ['./deletestudent.component.scss']
})
export class DeletestudentComponent implements OnInit {
  @Input() studentId!:number;
  students:any[] = []
  student:any;
  constructor(private dialogService:DialogService,private studentService:StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudents()
    this.student = this.students.find((ele)=>ele.id == this.studentId)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes',changes['studentId'].currentValue)
    this.getStudentById(changes['studentId'].currentValue)
  }
  getStudentById(id: number) {
    // Get Student By ID
    this.students = this.studentService.getStudents();
    this.student = this.students.find((ele) => ele.id == id);
  }
  delete(id:number){
    this.studentService.deleteStudent(id)
  }
  closeDialog(){
    this.dialogService.toggleDisplayDialog(false)
  }

}
