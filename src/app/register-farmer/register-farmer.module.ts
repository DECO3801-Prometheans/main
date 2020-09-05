import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFarmerPageRoutingModule } from './register-farmer-routing.module';

import { RegisterFarmerPage } from './register-farmer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFarmerPageRoutingModule
  ],
  declarations: [RegisterFarmerPage]
})
export class RegisterFarmerPageModule {}
