import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecentlyViewedProductsPageRoutingModule } from './recently-viewed-products-routing.module';

import { RecentlyViewedProductsPage } from './recently-viewed-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecentlyViewedProductsPageRoutingModule
  ],
  declarations: [RecentlyViewedProductsPage]
})
export class RecentlyViewedProductsPageModule {}
