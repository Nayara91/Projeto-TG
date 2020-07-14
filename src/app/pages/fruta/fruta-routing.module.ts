import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrutaPage } from './fruta.page';

const routes: Routes = [
  {
    path: '',
    component: FrutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrutaPageRoutingModule {}
