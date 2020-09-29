import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartModalPage } from './shopping-cart-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartModalPageRoutingModule {}
