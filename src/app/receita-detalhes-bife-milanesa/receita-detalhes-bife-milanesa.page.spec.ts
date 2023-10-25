import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitaDetalhesBifeMilanesaPage } from './receita-detalhes-bife-milanesa.page';

describe('ReceitaDetalhesBifeMilanesaPage', () => {
  let component: ReceitaDetalhesBifeMilanesaPage;
  let fixture: ComponentFixture<ReceitaDetalhesBifeMilanesaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReceitaDetalhesBifeMilanesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
