import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupPurchaseAmountPageRoutingModule } from './group-purchase-amount-routing.module';

import { GroupPurchaseAmountPage } from './group-purchase-amount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupPurchaseAmountPageRoutingModule
  ],
  declarations: [GroupPurchaseAmountPage]
})
export class GroupPurchaseAmountPageModule {}
