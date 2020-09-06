import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFarmerPage } from './register-farmer.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFarmerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFarmerPageRoutingModule {}
