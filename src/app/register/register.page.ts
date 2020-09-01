import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss']
})
export class RegisterPage implements OnInit {

  userForm: FormGroup;

  constructor(
    public http: HttpClient,
    public fb: FormBuilder,
    private userService: UserService
    ) { 
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

  register() {
    this.userService.register(this.userForm.value.first_name, 
      this.userForm.value.last_name, 
      this.userForm.value.type, 
      this.userForm.value.email, 
      this.userForm.value.address, 
      this.userForm.value.mobile, 
      this.userForm.value.password,
      ).subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error.error.message);
        window.confirm(error.error.message);
      });
  }
}
