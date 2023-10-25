import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceitaDetalhesBifeMilanesaPageRoutingModule } from './receita-detalhes-bife-milanesa-routing.module';

import { ReceitaDetalhesBifeMilanesaPage } from './receita-detalhes-bife-milanesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitaDetalhesBifeMilanesaPageRoutingModule
  ],
  declarations: [ReceitaDetalhesBifeMilanesaPage]
})
export class ReceitaDetalhesBifeMilanesaPageModule {}
