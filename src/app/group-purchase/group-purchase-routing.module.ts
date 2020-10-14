import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupPurchasePage } from './group-purchase.page';

const routes: Routes = [
  {
    path: '',
    component: GroupPurchasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupPurchasePageRoutingModule {}
