import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupPurchaseAmountPage } from './group-purchase-amount.page';

const routes: Routes = [
  {
    path: '',
    component: GroupPurchaseAmountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupPurchaseAmountPageRoutingModule {}
