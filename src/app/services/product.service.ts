import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { EnvService } from './env.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private env: EnvService,
    ) {
      storage.ready().then(() => {
    }); 
  }

  getCategories(category: String) {
    return this.http.get(this.env.API_URL + '/types/category/' + category);
  }
}
