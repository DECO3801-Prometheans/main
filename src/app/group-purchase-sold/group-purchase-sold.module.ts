import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupPurchaseSoldPageRoutingModule } from './group-purchase-sold-routing.module';

import { GroupPurchaseSoldPage } from './group-purchase-sold.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupPurchaseSoldPageRoutingModule
  ],
  declarations: [GroupPurchaseSoldPage]
})
export class GroupPurchaseSoldPageModule {}
