import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaDetalhesEspetinhoCoracaoPage } from './receita-detalhes-espetinho-coracao.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitaDetalhesEspetinhoCoracaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitaDetalhesEspetinhoCoracaoPageRoutingModule {}
