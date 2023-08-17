import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarTarefaComponent } from './adicionar-tarefa.component';

describe('AdicionarTarefaComponent', () => {
  let component: AdicionarTarefaComponent;
  let fixture: ComponentFixture<AdicionarTarefaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarTarefaComponent]
    });
    fixture = TestBed.createComponent(AdicionarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
