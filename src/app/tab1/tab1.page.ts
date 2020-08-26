import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

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

  registerUser() {

    this.http.post("http://localhost:3000/users", this.userForm.value, {})
      .then(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }
}
