import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenderService } from 'src/app/shared/services/gender/gender.service';
import { LangService } from 'src/app/shared/services/lang/lang.service';
import { ParentService } from 'src/app/shared/services/parent/parent.service';
import { StageService } from 'src/app/shared/services/stage/stage.service';
import { StudentService } from 'src/app/shared/services/student/student.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.scss'],
})
export class EditstudentComponent implements OnInit {
  students: any[] = [];
  student: any;
  date:any;
  selectedParent: any;
  selectedStage: any;
  selectedGender: any;
  parent_list: any[] = [];
  stage_list: any[] = [];
  gender_list: any[] = [];
  lang: any;
  imageSrc: any;
  @Input() id!: number;
  editStudent = new FormGroup({
    firstname: new FormControl('', Validators.required),
    secondname: new FormControl('', Validators.required),
    thirdname: new FormControl('', Validators.required),
    forthname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    motherfathername: new FormControl('', Validators.required),
    mothergrandname: new FormControl('', Validators.required),
    mothername: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
    stage_id: new FormControl('', Validators.required),
    parent_id: new FormControl('', Validators.required),
  });
  constructor(
    private _StudentInfoService: StudentService,
    private parentService: ParentService,
    private stageService: StageService,
    private genderService: GenderService,
    private langService: LangService
  ) {}
  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = reader.result;
        this.editStudent.patchValue({
          photo: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  }

  ngOnInit(): void {
    // Get Lang
    this.langService.currentLang.subscribe((result: any) => {
      this.lang = result;
    });
    // Get Stages
    this.stageService.getStages().subscribe((data: any) => {
      this.stage_list = data;
      // Select Stage
      this.selectedStage = this.stage_list.find((ele:any)=> ele.id == this.student.stage_id)
    });
    // Get Parents
    this.parentService.getParents().subscribe((data: any) => {
      this.parent_list = data;
      // Select Parent
      this.selectedParent = this.parent_list.find((ele:any)=> ele.id == this.student.parent_id)
    });
    // Get Gender
    this.gender_list = this.genderService.getGender();
    // Get Student
    this.getStudentById(this.id)
  }
  onSelectGender(value: any) {
    // Empty Object
    this.selectedGender = {};
    // Add To Object
    this.selectedGender = value;
    // Set Gender Value
    this.editStudent.patchValue({
      gender: this.selectedGender.nameEn,
    });
  }
  setDate(){
    this.editStudent.patchValue({
      stage_id:this.selectedStage
    })
  }
  getStudentById(id: number) {
    // Get Student By ID
    // this.students = this._StudentInfoService.getStudents();
    this._StudentInfoService.getStudentById(id).subscribe((result:any)=>{
      this.student = result
    })
    // Get Gender By NameEN
    this.selectedGender = this.gender_list.find((ele:any)=> ele.nameEn == this.student.gender);

    this.imageSrc = this.student.photo;
    this.selectedStage = this.student.stage_id;
    this.editStudent.patchValue(this.student);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getStudentById(changes['id'].currentValue)
  }
  onSubmit() {
    let d = new Date(this.date)
    let day = d.getDate()
    let month = d.getMonth() + 1;
    let year = d.getFullYear()
    let date = `${day}/${month}/${year}`
    this.editStudent.patchValue({
      birthdate:date
    })
    console.log(`${day}/${month}/${year}`)
    console.log(this.editStudent.value)
    // this._StudentInfoService.editStudent(this.addStudent.value).subscribe()
  }
}
