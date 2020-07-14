import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HortalicaPage } from './hortalica.page';

const routes: Routes = [
  {
    path: '',
    component: HortalicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HortalicaPageRoutingModule {}
