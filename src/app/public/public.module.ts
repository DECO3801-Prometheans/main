import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule }  from '@ionic/angular';

import { HeaderComponent } from '../components/header/header.component';
import { RecommendFarmerComponent } from '../components/recommend-farmer/recommend-farmer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    RecommendFarmerComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    HeaderComponent,
    RecommendFarmerComponent,
  ]
})
export class PublicModule { }
