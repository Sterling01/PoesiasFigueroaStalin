import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPoesiasPageRoutingModule } from './lista-poesias-routing.module';

import { ListaPoesiasPage } from './lista-poesias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPoesiasPageRoutingModule
  ],
  declarations: [ListaPoesiasPage]
})
export class ListaPoesiasPageModule {}
