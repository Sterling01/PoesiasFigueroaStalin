import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComentarPoesiaPage } from './comentar-poesia.page';

const routes: Routes = [
  {
    path: '',
    component: ComentarPoesiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComentarPoesiaPageRoutingModule {}
