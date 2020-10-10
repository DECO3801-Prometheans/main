import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayPaymentPageRoutingModule } from './pay-payment-routing.module';

import { PayPaymentPage } from './pay-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayPaymentPageRoutingModule
  ],
  declarations: [PayPaymentPage]
})
export class PayPaymentPageModule {}
