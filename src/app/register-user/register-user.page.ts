import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {

  userForm: FormGroup;

  constructor(
    public http: HttpClient,
    public fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    public alertController: AlertController
  ) {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
      password1: [''],
      password2: [''],
    })
  }

  ngOnInit() {
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  register() {
    if (this.userForm.value.name == ''){
        this.presentAlert("Please enter a name"); 
    } else if (this.userForm.value.password1 == '') {
        this.presentAlert("Please enter password");    
    } else if (this.userForm.value.password2 == '') {
        this.presentAlert("Please enter confirm password");    
    } else if (this.userForm.value.password1 != this.userForm.value.password2) { 
        this.presentAlert("Passwords do not match")  
    } else { 
      var name = this.userForm.value.name.split(" ", 2);
      this.userService.register(name[0], 
        name[1], 
        "customer", 
        this.userForm.value.email, 
        "address", 
        this.userForm.value.mobile, 
        this.userForm.value.password1,
        ).subscribe(data => {
          console.log(data);
          this.router.navigate(['/verification'])
        }, error => {
          this.presentAlert(error.error.message);
        });
    }
  }
}
