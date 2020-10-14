import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupPurchaseSoldPage } from './group-purchase-sold.page';

const routes: Routes = [
  {
    path: '',
    component: GroupPurchaseSoldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupPurchaseSoldPageRoutingModule {}
