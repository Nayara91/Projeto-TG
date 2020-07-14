import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HortalicaPageRoutingModule } from './hortalica-routing.module';

import { HortalicaPage } from './hortalica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HortalicaPageRoutingModule
  ],
  declarations: [HortalicaPage]
})
export class HortalicaPageModule {}
