import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupPurchasePageRoutingModule } from './group-purchase-routing.module';

import { GroupPurchasePage } from './group-purchase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupPurchasePageRoutingModule
  ],
  declarations: [GroupPurchasePage]
})
export class GroupPurchasePageModule {}
