import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpDatePageRoutingModule } from './exp-date-routing.module';

import { ExpDatePage } from './exp-date.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpDatePageRoutingModule
  ],
  declarations: [ExpDatePage]
})
export class ExpDatePageModule {}
