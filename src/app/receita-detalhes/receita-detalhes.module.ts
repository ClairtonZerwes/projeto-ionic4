import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceitaDetalhesPageRoutingModule } from './receita-detalhes-routing.module';

import { ReceitaDetalhesPage } from './receita-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitaDetalhesPageRoutingModule
  ],
  declarations: [ReceitaDetalhesPage]
})
export class ReceitaDetalhesPageModule {}
