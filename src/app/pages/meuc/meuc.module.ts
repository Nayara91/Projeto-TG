import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeucPageRoutingModule } from './meuc-routing.module';

import { MeucPage } from './meuc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeucPageRoutingModule
  ],
  declarations: [MeucPage]
})
export class MeucPageModule {}
