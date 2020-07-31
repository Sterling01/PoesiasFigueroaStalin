import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentarPoesiaPageRoutingModule } from './comentar-poesia-routing.module';

import { ComentarPoesiaPage } from './comentar-poesia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComentarPoesiaPageRoutingModule
  ],
  declarations: [ComentarPoesiaPage]
})
export class ComentarPoesiaPageModule {}
