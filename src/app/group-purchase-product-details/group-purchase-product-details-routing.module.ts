import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupPurchaseProductDetailsPage } from './group-purchase-product-details.page';

const routes: Routes = [
  {
    path: '',
    component: GroupPurchaseProductDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupPurchaseProductDetailsPageRoutingModule {}
