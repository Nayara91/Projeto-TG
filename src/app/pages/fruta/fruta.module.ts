import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrutaPageRoutingModule } from './fruta-routing.module';

import { FrutaPage } from './fruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrutaPageRoutingModule
  ],
  declarations: [FrutaPage]
})
export class FrutaPageModule {}
