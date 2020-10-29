import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ShoppingCartModalPage } from '../shopping-cart-modal/shopping-cart-modal.page';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  constructor(
    private router: Router,
    public modalController: ModalController,
    ) { }

  ngOnInit() {
  }

  checkout() {
    this.router.navigate(['/tabs/pay-payment']);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ShoppingCartModalPage,
      cssClass: 'my-custom-modal-css',
    });
    return await modal.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
