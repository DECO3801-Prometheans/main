import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from "@angular/forms";
import * as jwt from 'jsonwebtoken';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {
 
  userForm: FormGroup;

  constructor(
    public http: HTTP,
    public fb: FormBuilder,
    public _http: HttpClient,
    ) { 
      this.userForm = this.fb.group({
        name: [''],
        password: ['']
      })
  }

  ngOnInit(){}

  login() {
    this._http.post("http://localhost:3000/users/login", this.userForm.value)
    .subscribe(done => {
        localStorage.setItem('token', JSON.stringify(done));
        localStorage.setItem('username', this.userForm.value.name);
        console.log(done);
      }, error => {
        console.log(error.error.message);
        window.confirm(error.error.message);
      });
  }
}
