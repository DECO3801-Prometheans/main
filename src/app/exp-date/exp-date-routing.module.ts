import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpDatePage } from './exp-date.page';

const routes: Routes = [
  {
    path: '',
    component: ExpDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpDatePageRoutingModule {}
