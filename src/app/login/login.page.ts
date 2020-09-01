import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from "@angular/forms";
import * as jwt from 'jsonwebtoken';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {
 
  userForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public http: HttpClient,
    private userService: UserService
    ) { 
      this.userForm = this.fb.group({
        email: [''],
        password: ['']
      })
  }

  ngOnInit(){}

  login() {
    this.userService.login(this.userForm.value.email, this.userForm.value.password);
  }
}
