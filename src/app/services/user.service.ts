import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EnvService } from './env.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  isLoggedIn = false;
  token:any;

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private env: EnvService,
    ) { }


  login(email: String, password: String) {
    return this.http.post(this.env.API_URL + '/users/login',
      {email: email, password: password}
    ).pipe(
      token => {
        this.storage.set('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      },
    );
  }

  register(fName: String, lName: String, type: String, email: String, address: String, mobile: String, password: String) {
    return this.http.post(this.env.API_URL + '/users',
      {email: email, password: password, type: type, first_name: fName, last_name: lName, address: address, phone: mobile}
    )
  }

  logout() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
    .pipe(
      data => {
        this.storage.remove("token");
        this.isLoggedIn = false;
        delete this.token;
        return data;
      }
    )
  }

  getToken() {
    return this.storage.get('token').then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }
}
