import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  users: Array<string>;

  constructor() {
      this.users = [localStorage.getItem('username')];
  }
 
  logout() {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      console.log('loggingout')
  }
}
