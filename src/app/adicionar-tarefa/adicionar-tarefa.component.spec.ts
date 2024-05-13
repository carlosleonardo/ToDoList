import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarTarefaComponent } from './adicionar-tarefa.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { NgbActiveModal, NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

describe('AdicionarTarefaComponent', () => {
  let component: AdicionarTarefaComponent;
  let fixture: ComponentFixture<AdicionarTarefaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, FormsModule, AdicionarTarefaComponent],
    providers: [NgbActiveModal, NgbModal],
    schemas: [NO_ERRORS_SCHEMA],
});
    fixture = TestBed.createComponent(AdicionarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
