import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitaDetalhesPage } from './receita-detalhes.page';

describe('ReceitaDetalhesPage', () => {
  let component: ReceitaDetalhesPage;
  let fixture: ComponentFixture<ReceitaDetalhesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReceitaDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
