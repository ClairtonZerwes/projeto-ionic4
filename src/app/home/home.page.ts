import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    //alert("Teste Mensagem Alerta padrão OnInit().")
    console.log('ngOnInit()')
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter()')
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter()')
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave()')
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave()')
  }

  ngOnDestroy() {
    //alert("Exemplo Mensagem Alerta padrão OnDestroy().")
    console.log('ngOnDestroy() ')
  }

}
