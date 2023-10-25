import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceitaDetalhesEspetinhoCoracaoPageRoutingModule } from './receita-detalhes-espetinho-coracao-routing.module';

import { ReceitaDetalhesEspetinhoCoracaoPage } from './receita-detalhes-espetinho-coracao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitaDetalhesEspetinhoCoracaoPageRoutingModule
  ],
  declarations: [ReceitaDetalhesEspetinhoCoracaoPage]
})
export class ReceitaDetalhesEspetinhoCoracaoPageModule {}
