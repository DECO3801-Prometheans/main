import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-shopping-cart-modal',
  templateUrl: './shopping-cart-modal.page.html',
  styleUrls: ['./shopping-cart-modal.page.scss'],
})
export class ShoppingCartModalPage {

  constructor(
    private modalCtrl:ModalController
  ) { }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

}
