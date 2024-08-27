import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarTarefaComponent } from './adicionar-tarefa.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { NgbActiveModal, NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AdicionarTarefaComponent', () => {
  let component: AdicionarTarefaComponent;
  let fixture: ComponentFixture<AdicionarTarefaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [FormsModule, AdicionarTarefaComponent],
    providers: [NgbActiveModal, NgbModal, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    fixture = TestBed.createComponent(AdicionarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
