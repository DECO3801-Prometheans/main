import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
    private userService: UserService,
    private router: Router,
    public alertController: AlertController
    ) { 
      this.userForm = this.fb.group({
        email: [''],
        password: ['']
      })
  }

  ngOnInit(){}

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  login() {
    if (this.userForm.value.email == ''){
      this.presentAlert("Please enter an email"); 
  } else if (this.userForm.value.password == '') {
      this.presentAlert("Please enter password");    
  } else {
      this.userService.login(this.userForm.value.email, this.userForm.value.password)
      .subscribe(done => {
          console.log(done);
          this.router.navigate(['/tabs/home'])
        }, error => {
          this.presentAlert(error.error.message);
        });
    }
  }
}
