import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeucPage } from './meuc.page';

const routes: Routes = [
  {
    path: '',
    component: MeucPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeucPageRoutingModule {}
