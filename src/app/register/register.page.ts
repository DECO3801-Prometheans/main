import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss']
})
export class RegisterPage implements OnInit {

  userForm: FormGroup;

  constructor(
    public http: HttpClient,
    public fb: FormBuilder) { 
      this.userForm = this.fb.group({
        first_name: [''],
        last_name: [''],
        type: [''],
        email: [''],
        mobile: [''],
        password: ['']
      })
  }

  ngOnInit(){}

  registerUser() {

    this.http.post("http://localhost:3000/users", this.userForm.value, {})
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error.error.message);
        window.confirm(error.error.message);
      });
  }
}
