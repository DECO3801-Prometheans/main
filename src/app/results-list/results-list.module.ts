import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultsListPageRoutingModule } from './results-list-routing.module';

import { ResultsListPage } from './results-list.page';
import { PublicModule } from '../public/public.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultsListPageRoutingModule,
    PublicModule,
  ],
  declarations: [ResultsListPage]
})
export class ResultsListPageModule {}
