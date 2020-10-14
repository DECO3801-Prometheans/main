import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupPurchaseTimeoutPageRoutingModule } from './group-purchase-timeout-routing.module';

import { GroupPurchaseTimeoutPage } from './group-purchase-timeout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupPurchaseTimeoutPageRoutingModule
  ],
  declarations: [GroupPurchaseTimeoutPage]
})
export class GroupPurchaseTimeoutPageModule {}
