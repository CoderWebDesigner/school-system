import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../../interfaces/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    {
      id: 1,
      firstname: 'احمد رمزي',
      gender: 'male',
      birthdate: '26/6/1994',
      photo: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الاول الجامعي',
      attendanceRate: 30,
      city:'Cairo',
      status:true,
      phone:'+201002909701',
      address:'Cairo, Egypt',
      stage_id:1,
      parent_id:1
    },
    {
      id: 2,
      firstname: 'Hassan Karim',
      gender: 'male',
      birthdate: '26/6/1994',
      photo: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الثالث الجامعي',
      attendanceRate: 100,
      city:'Alexandria',
      status:false,
      phone:'+201002909701',
      address:'Alexandria, Egypt',
      stage_id:1,
      parent_id:1
    },
    {
      id: 3,
      firstname: 'Salma mustafa',
      gender: 'female',
      birthdate: '26/6/1994',
      photo: 'https://www.pngitem.com/pimgs/m/4-43793_student-png-college-for-girl-png-transparent-png.png',
      grade: 'الصف الثاني الجامعي',
      attendanceRate: 50,
      city:'Aswan',
      status:true,
      phone:'+201002909701',
      address:'Aswan, Egypt',
      stage_id:1,
      parent_id:1
    },
    {
      id: 4,
      firstname: 'احمد رمزي',
      gender: 'male',
      birthdate: '26/6/1994',
      photo: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الاول الجامعي',
      attendanceRate: 30,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      address:'Qalubia, Egypt',
      stage_id:1,
      parent_id:1
    },
    {
      id: 5,
      firstname: 'Hassan Karim',
      gender: 'male',
      birthdate: '26/6/1994',
      photo: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الثالث الجامعي',
      attendanceRate: 100,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      address:'Qalubia, Egypt',
      stage_id:1,
      parent_id:1
    },
    {
      id: 6,
      firstname: 'Salma mustafa',
      gender: 'female',
      birthdate: '26/6/1994',
      photo: 'https://www.pngitem.com/pimgs/m/4-43793_student-png-college-for-girl-png-transparent-png.png',
      grade: 'الصف الثاني الجامعي',
      attendanceRate: 50,
      city:'Qalubia',
      status:true,
      address:'Qalubia, Egypt',
      stage_id:1,
      parent_id:1
    },
    {
      id: 7,
      firstname: 'احمد رمزي',
      gender: 'male',
      birthdate: '26/6/1994',
      photo: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الاول الجامعي',
      attendanceRate: 30,
      city:'Qalubia',
      status:true,
      stage_id:1,
      parent_id:1
    },
    {
      id: 8,
      firstname: 'Hassan Karim',
      gender: 'male',
      birthdate: '26/6/1994',
      photo: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الثالث الجامعي',
      attendanceRate: 100,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      stage_id:1,
      parent_id:1
    },
    {
      id: 9,
      firstname: 'Salma mustafa',
      gender: 'female',
      birthdate: '26/6/1994',
      photo: 'https://www.pngitem.com/pimgs/m/4-43793_student-png-college-for-girl-png-transparent-png.png',
      grade: 'الصف الثاني الجامعي',
      attendanceRate: 50,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      address:'Qalubia, Egypt',
      stage_id:1,
      parent_id:1
    },
    {
      id: 10,
      firstname: 'احمد رمزي',
      gender: 'male',
      birthdate: '26/6/1994',
      photo: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الاول الجامعي',
      attendanceRate: 30,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      address:'Qalubia, Egypt',
      stage_id:1,
      parent_id:1
    },
    {
      id: 11,
      firstname: 'Hassan Karim',
      gender: 'male',
      birthdate: '26/6/1994',
      photo: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الثالث الجامعي',
      attendanceRate: 100,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      address:'Qalubia, Egypt',
      stage_id:1,
      parent_id:1
    },
    {
      id: 12,
      firstname: 'Salma mustafa',
      gender: 'female',
      birthdate: '26/6/1994',
      photo: 'https://www.pngitem.com/pimgs/m/4-43793_student-png-college-for-girl-png-transparent-png.png',
      grade: 'الصف الثاني الجامعي',
      attendanceRate: 50,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      address:'Qalubia, Egypt',
      stage_id:1,
      parent_id:1
    },
    {
      id: 13,
      firstname: 'احمد رمزي',
      gender: 'male',
      birthdate: '26/6/1994',
      photo: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الاول الجامعي',
      attendanceRate: 30,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      address:'Qalubia, Egypt',
      stage_id:1,
      parent_id:1
    },
    {
      id: 14,
      firstname: 'Hassan Karim',
      gender: 'male',
      birthdate: '26/6/1994',
      photo: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الثالث الجامعي',
      attendanceRate: 100,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      address:'Qalubia, Egypt',
      stage_id:1,
      parent_id:1
    },
    {
      id: 15,
      firstname: 'Salma mustafa',
      gender: 'female',
      birthdate: '26/6/1994',
      photo: 'https://www.pngitem.com/pimgs/m/4-43793_student-png-college-for-girl-png-transparent-png.png',
      grade: 'الصف الثاني الجامعي',
      attendanceRate: 50,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      address:'Qalubia, Egypt',
      stage_id:1,
      parent_id:1
    },
  ];
  private _listStudentsApiUrl = "api/students.json";
  private _getStudentByIdApiUrl = "api/students/getallstudentdata/"
  private _addStudentsApiUrl = "api/students/add.json";
  private _editStudentsApiUrl = "api/students/edit/";
  private _deleteStudentsApiUrl = "api/students/delete/";
  constructor(private http:HttpClient) {}
  // getStudents() {
  //   return this.students;
  // }
  addStudent(student:Student){
    return this.http.post(`${environment.baseUrl}${this._addStudentsApiUrl}`,student).pipe(map((res:any) => res['data']))
  }
  getStudentById(id:number){
    console.log(`${environment.baseUrl}${this._getStudentByIdApiUrl}${id}.json`)
    return this.http.get(`${environment.baseUrl}${this._getStudentByIdApiUrl}${id}.json`)
  }
  getStudents(){
    return this.http.get(`${environment.baseUrl}${this._listStudentsApiUrl}`).pipe(map((res:any) => res['data']))
  }
  editStudent(id:number,studentInfo:any){
    return this.http.post(`${environment.baseUrl}${this._editStudentsApiUrl}${id}.json`,studentInfo).pipe(map((res:any)=> res['data'] ))
  }
  deleteStudent(id:number){
    return this.http.post(`${environment.baseUrl}${this._deleteStudentsApiUrl}${id}.json`,'').pipe(map((res:any)=> res['data'] ))
  }
}
