import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita-detalhes',
  templateUrl: './receita-detalhes.page.html',
  styleUrls: ['./receita-detalhes.page.scss'],
})
export class ReceitaDetalhesPage implements OnInit {

  constructor() { }

  ngOnInit() {
    //alert("Teste Mensagem Alerta padrão OnInit().")
    console.log('ngOnInit()')
  }

  // ionViewWillEnter() {
  //   console.log('ionViewWillEnter()')
  // }

  // ionViewDidEnter() {
  //   console.log('ionViewDidEnter()')
  // }

  // ionViewWillLeave() {
  //   console.log('ionViewWillLeave()')
  // }

  // ionViewDidLeave() {
  //   console.log('ionViewDidLeave()')
  // }

  // ngOnDestroy() {
  //   //alert("Exemplo Mensagem Alerta padrão OnDestroy().")
  //   console.log('ngOnDestroy() ')
  // }

}
