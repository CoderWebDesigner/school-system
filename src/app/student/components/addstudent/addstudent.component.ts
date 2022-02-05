import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenderService } from 'src/app/shared/services/gender/gender.service';
import { LangService } from 'src/app/shared/services/lang/lang.service';
import { ParentService } from 'src/app/shared/services/parent/parent.service';
import { StageService } from 'src/app/shared/services/stage/stage.service';
import { StudentService } from 'src/app/shared/services/student/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {
  selectedParent:any;
  selectedStage:any;
  selectedGender:any;
  parent_list: any[] = [];
  stage_list: any[] = [];
  gender_list: any[] = [];
  lang:any;
  imageSrc: any = "../../assets/images/icons/user.png";
  addStudent = new FormGroup({
    firstname: new FormControl("", Validators.required),
    // secondname: new FormControl("", Validators.required),
    // thirdname: new FormControl("", Validators.required),
    // forthname: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    birthdate: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    // motherfathername: new FormControl("", Validators.required),
    // mothergrandname: new FormControl("", Validators.required),
    // mothername: new FormControl("", Validators.required),
    photo: new FormControl(""),
    stage_id: new FormControl("", Validators.required),
    parent_id: new FormControl("", Validators.required),
  });
  constructor(
    private _StudentInfoService: StudentService,
    private parentService: ParentService,
    private stageService: StageService,
    private genderService:GenderService,
    private langService:LangService
  ) {}
  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }


  ngOnInit(): void {
    // Get Lang
    this.langService.currentLang.subscribe((result:any)=>{
      this.lang = result;
    })
    // Get Stages
    this.stageService.getStages().subscribe((data:any)=>{
      this.stage_list = data;
      console.log(this.stage_list)
    })
    // Get Parents
    this.parentService.getParents().subscribe((data:any)=>{
      this.parent_list = data;
    })
    // Get Gender
    this.gender_list = this.genderService.getGender();

  }
  onSelectGender(value:any){
    // Empty Object
    this.selectedGender = {}
    // Add To Object
    this.selectedGender = value;
    this.addStudent.controls['gender'].markAsUntouched()
  }
  onSubmit(){
    this.addStudent.markAllAsTouched()

    console.log(this.addStudent)
    this._StudentInfoService.addStudent(this.addStudent.value).subscribe((result:any)=>{
      console.log(result)
    })
  }
}
