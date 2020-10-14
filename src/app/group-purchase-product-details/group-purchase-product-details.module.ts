import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupPurchaseProductDetailsPageRoutingModule } from './group-purchase-product-details-routing.module';

import { GroupPurchaseProductDetailsPage } from './group-purchase-product-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupPurchaseProductDetailsPageRoutingModule
  ],
  declarations: [GroupPurchaseProductDetailsPage]
})
export class GroupPurchaseProductDetailsPageModule {}
