import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaDetalhesPage } from './receita-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitaDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitaDetalhesPageRoutingModule {}
