import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(public http: HTTP) {
  }
  ngOnInit(){}

  sendPostRequest() {
    let postData = {
            "name": "ionicposttestuser",
            "password": "customer004@email.com"
    }

    this.http.post("http://localhost:3000/users", postData, {})
      .then(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }
}
