import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MundhumaataPageRoutingModule } from './mundhumaata-routing.module';

import { MundhumaataPage } from './mundhumaata.page';
import { MundhumaataPipe } from './mundhumaata-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MundhumaataPageRoutingModule
  ],
  declarations: [MundhumaataPage,MundhumaataPipe]
})
export class MundhumaataPageModule {}
