import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPoesiasPage } from './lista-poesias.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPoesiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPoesiasPageRoutingModule {}
