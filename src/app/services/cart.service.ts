import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { EnvService } from './env.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productList = [];
  cartProductList = [];

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private env: EnvService,
  ) {
    storage.ready().then(() => {
    }); 
  }

  addProductToCart(product, quantity) {
    const productExistInCart = this.cartProductList.find(({name}) => name === product.name); // find product by name
    if (!productExistInCart) {
      this.cartProductList.push({...product, num:quantity}); // enhance "product" object with "num" property
      return;
    }
    productExistInCart.num += quantity;
  }

  removeProduct(product) {
    this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name)
  }
}

