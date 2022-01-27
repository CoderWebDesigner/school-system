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
      name: 'احمد رمزي',
      gender: 'male',
      birthDate: '26/6/1994',
      imagePath: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الاول الجامعي',
      attendanceRate: 30,
      city:'Cairo',
      status:true,
      phone:'+201002909701',
      address:'Cairo, Egypt'
    },
    {
      id: 2,
      name: 'Hassan Karim',
      gender: 'male',
      birthDate: '26/6/1994',
      imagePath: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الثالث الجامعي',
      attendanceRate: 100,
      city:'Alexandria',
      status:false,
      phone:'+201002909701',
      address:'Alexandria, Egypt'
    },
    {
      id: 3,
      name: 'Salma mustafa',
      gender: 'female',
      birthDate: '26/6/1994',
      imagePath: 'https://www.pngitem.com/pimgs/m/4-43793_student-png-college-for-girl-png-transparent-png.png',
      grade: 'الصف الثاني الجامعي',
      attendanceRate: 50,
      city:'Aswan',
      status:true,
      phone:'+201002909701',
      address:'Aswan, Egypt'
    },
    {
      id: 4,
      name: 'احمد رمزي',
      gender: 'male',
      birthDate: '26/6/1994',
      imagePath: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الاول الجامعي',
      attendanceRate: 30,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      address:'Qalubia, Egypt'
    },
    {
      id: 5,
      name: 'Hassan Karim',
      gender: 'male',
      birthDate: '26/6/1994',
      imagePath: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الثالث الجامعي',
      attendanceRate: 100,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      address:'Qalubia, Egypt'
    },
    {
      id: 6,
      name: 'Salma mustafa',
      gender: 'female',
      birthDate: '26/6/1994',
      imagePath: 'https://www.pngitem.com/pimgs/m/4-43793_student-png-college-for-girl-png-transparent-png.png',
      grade: 'الصف الثاني الجامعي',
      attendanceRate: 50,
      city:'Qalubia',
      status:true,
      address:'Qalubia, Egypt'
    },
    {
      id: 7,
      name: 'احمد رمزي',
      gender: 'male',
      birthDate: '26/6/1994',
      imagePath: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الاول الجامعي',
      attendanceRate: 30,
      city:'Qalubia',
      status:true,
    },
    {
      id: 8,
      name: 'Hassan Karim',
      gender: 'male',
      birthDate: '26/6/1994',
      imagePath: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الثالث الجامعي',
      attendanceRate: 100,
      city:'Qalubia',
      status:true,
      phone:'+201002909701'
    },
    {
      id: 9,
      name: 'Salma mustafa',
      gender: 'female',
      birthDate: '26/6/1994',
      imagePath: 'https://www.pngitem.com/pimgs/m/4-43793_student-png-college-for-girl-png-transparent-png.png',
      grade: 'الصف الثاني الجامعي',
      attendanceRate: 50,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      address:'Qalubia, Egypt'
    },
    {
      id: 10,
      name: 'احمد رمزي',
      gender: 'male',
      birthDate: '26/6/1994',
      imagePath: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الاول الجامعي',
      attendanceRate: 30,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      address:'Qalubia, Egypt'
    },
    {
      id: 11,
      name: 'Hassan Karim',
      gender: 'male',
      birthDate: '26/6/1994',
      imagePath: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الثالث الجامعي',
      attendanceRate: 100,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      address:'Qalubia, Egypt'
    },
    {
      id: 12,
      name: 'Salma mustafa',
      gender: 'female',
      birthDate: '26/6/1994',
      imagePath: 'https://www.pngitem.com/pimgs/m/4-43793_student-png-college-for-girl-png-transparent-png.png',
      grade: 'الصف الثاني الجامعي',
      attendanceRate: 50,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      address:'Qalubia, Egypt'
    },
    {
      id: 13,
      name: 'احمد رمزي',
      gender: 'male',
      birthDate: '26/6/1994',
      imagePath: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الاول الجامعي',
      attendanceRate: 30,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      address:'Qalubia, Egypt'
    },
    {
      id: 14,
      name: 'Hassan Karim',
      gender: 'male',
      birthDate: '26/6/1994',
      imagePath: 'https://www.nssi.com/media/wysiwyg/images/2.jpg',
      grade: 'الصف الثالث الجامعي',
      attendanceRate: 100,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      address:'Qalubia, Egypt'
    },
    {
      id: 15,
      name: 'Salma mustafa',
      gender: 'female',
      birthDate: '26/6/1994',
      imagePath: 'https://www.pngitem.com/pimgs/m/4-43793_student-png-college-for-girl-png-transparent-png.png',
      grade: 'الصف الثاني الجامعي',
      attendanceRate: 50,
      city:'Qalubia',
      status:true,
      phone:'+201002909701',
      address:'Qalubia, Egypt'
    },
  ];
  private _listStudentsApiUrl = "api/students.json";
  constructor(private http:HttpClient) {}
  getStudents() {
    return this.students;
  }
  // getStudents(){
  //   return this.http.get(`${environment.baseUrl}${this._listStudentsApiUrl}`).pipe(map((res:any) => res['data']))
  // }
}
