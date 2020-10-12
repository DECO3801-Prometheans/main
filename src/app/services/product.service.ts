import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
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

  addProduct(name: String, type: String, price: String, numeraire: String, farmer_id: String, img: String, description: String) {
    return this.http.post(this.env.API_URL + '/products',
      {name: name, type: type, price: price, numeraire: numeraire, farmer_id: farmer_id, img: img, description: description}
    )
  }

  getCategories(category: String, auth_token) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get(this.env.API_URL + '/types/category/' + category, { headers: headers });
  }
}
