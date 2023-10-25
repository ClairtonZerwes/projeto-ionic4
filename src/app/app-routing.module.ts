import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'receita-detalhes',
    loadChildren: () => import('./receita-detalhes/receita-detalhes.module').then( m => m.ReceitaDetalhesPageModule)
  },
  {
    path: 'receita-detalhes-bife-milanesa',
    loadChildren: () => import('./receita-detalhes-bife-milanesa/receita-detalhes-bife-milanesa.module').then( m => m.ReceitaDetalhesBifeMilanesaPageModule)
  },
  {
    path: 'receita-detalhes-espetinho-coracao',
    loadChildren: () => import('./receita-detalhes-espetinho-coracao/receita-detalhes-espetinho-coracao.module').then( m => m.ReceitaDetalhesEspetinhoCoracaoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
