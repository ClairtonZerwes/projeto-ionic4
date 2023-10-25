import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitaDetalhesEspetinhoCoracaoPage } from './receita-detalhes-espetinho-coracao.page';

describe('ReceitaDetalhesEspetinhoCoracaoPage', () => {
  let component: ReceitaDetalhesEspetinhoCoracaoPage;
  let fixture: ComponentFixture<ReceitaDetalhesEspetinhoCoracaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReceitaDetalhesEspetinhoCoracaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
