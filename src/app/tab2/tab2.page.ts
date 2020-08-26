import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
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
    public fb: FormBuilder) { 
      this.userForm = this.fb.group({
        name: [''],
        password: ['']
      })
  }

  ngOnInit(){}

  login() {
    this.http.post("http://localhost:3000/users/login", this.userForm.value, {})
      .then(data => {
        localStorage.setItem('token', (<any>data)._body);
        console.log((<any>data)._body);
       }, error => {
        console.log(error);
      });
  }
}
