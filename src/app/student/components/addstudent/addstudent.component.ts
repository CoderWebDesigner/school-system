import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { StudentService } from 'src/app/shared/services/student/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {

  public parent_list: any;
  public stages_list: any;

  // private readonly _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private _StudentInfoService: StudentService,
    private _HttpClient: HttpClient
  ) {}

  addStudent = new FormGroup({
    firstname: new FormControl("", Validators.required),
    secondname: new FormControl("", Validators.required),
    thirdname: new FormControl("", Validators.required),
    forthname: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    birthdate: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    motherfathername: new FormControl("", Validators.required),
    mothergrandname: new FormControl("", Validators.required),
    mothername: new FormControl("", Validators.required),
    workdate_first_time: new FormControl("", Validators.required),
    photo: new FormControl("", Validators.required),
    stage_id: new FormControl("", Validators.required),
    parent_id: new FormControl("", Validators.required),
  });

  public addstudent() {
    this._HttpClient.post(
      "http://madares.codesroots.com/api/students/add.json",
      this.addStudent.value
    );
  }

  ngOnInit(): void {
    // this._StudentInfoService.getParent().subscribe((data:any) => {
    //   this.parent_list = data.data;
    // });

    // this._StudentInfoService.getStage().subscribe((data:any) => {
    //   this.stages_list = data.data;
    // });
  }

}
