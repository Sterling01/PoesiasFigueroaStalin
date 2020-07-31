import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoesiaPage } from './poesia.page';

const routes: Routes = [
  {
    path: '',
    component: PoesiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoesiaPageRoutingModule {}
