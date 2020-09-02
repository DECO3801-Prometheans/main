import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {

  users: Array<string>;

  constructor(
    private userService: UserService
    ) {
      this.users = [localStorage.getItem('username')];
  }

  ngOnInit(){
    this.userService.getUser();
  }
 
  logout() {
      this.userService.logout();
  }
}
