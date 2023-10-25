import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaDetalhesBifeMilanesaPage } from './receita-detalhes-bife-milanesa.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitaDetalhesBifeMilanesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitaDetalhesBifeMilanesaPageRoutingModule {}
