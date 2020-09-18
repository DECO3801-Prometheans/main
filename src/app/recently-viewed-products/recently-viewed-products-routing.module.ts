import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentlyViewedProductsPage } from './recently-viewed-products.page';

const routes: Routes = [
  {
    path: '',
    component: RecentlyViewedProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecentlyViewedProductsPageRoutingModule {}
