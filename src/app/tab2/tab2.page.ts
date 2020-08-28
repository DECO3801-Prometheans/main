import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from "@angular/forms";
import * as jwt from 'jsonwebtoken';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
 
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
    this.http.post("http://localhost:3000/users/login", this.userForm.value, {})
      .then(data => {
        console.log(data);
        localStorage.setItem('token', (<any>data)._body);
        console.log((<any>data)._body);
       }, error => {
        console.log(error);
      });
  }
  _login() {
    this._http.post("http://localhost:3000/users/login", {
      name: 'testUser',
      password: 'password',
    }).
      subscribe(done => {
        console.log(done);
      });
  }
}
