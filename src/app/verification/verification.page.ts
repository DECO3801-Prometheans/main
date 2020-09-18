import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  email = "";
  id = "";

  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    public fb: FormBuilder,
    public alertController: AlertController,
    private route: ActivatedRoute,
    ) {
      this.userForm = this.fb.group({
        code: [''],
      })
   }

  ngOnInit() {
    const id= this.route.snapshot.paramMap.get('id');
    this.id = id; 
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async verifyEmail() {
    if (this.userForm.value.code == ''){
        this.presentAlert("Please enter a code"); 
    } else { 
      const res = await this.userService.getUser(this.id).toPromise();
      console.log(res);
      this.email = res['email'];
      this.userService.verifyEmail(this.email, this.userForm.value.code)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['/tabs/home']);
        }, error => {
          this.presentAlert(error.error.message);
        });
    }
    
  }

}
