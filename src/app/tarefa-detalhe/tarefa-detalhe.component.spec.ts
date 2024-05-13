import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaDetalheComponent } from './tarefa-detalhe.component';

describe('TarefaDetalheComponent', () => {
  let component: TarefaDetalheComponent;
  let fixture: ComponentFixture<TarefaDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [TarefaDetalheComponent]
});
    fixture = TestBed.createComponent(TarefaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
