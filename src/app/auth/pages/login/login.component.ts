import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private _AuthService:AuthService , private _Router: Router) { }
  login() {
    this._AuthService.Login(this.loginForm.value).subscribe(
      (data:any) => {
        localStorage.setItem('token', data.data.token);
        this._Router.navigateByUrl('/website-categories');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {}
}
