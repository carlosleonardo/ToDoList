import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAfazeresComponent } from './lista-afazeres.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { FormsModule } from '@angular/forms';

describe('ListaAfazeresComponent', () => {
    let component: ListaAfazeresComponent;
    let fixture: ComponentFixture<ListaAfazeresComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                FormsModule,
                ListaAfazeresComponent,
            ],
            schemas: [NO_ERRORS_SCHEMA],
        });
        fixture = TestBed.createComponent(ListaAfazeresComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Obter todas as tarefas', () => {
        component.obterTarefas();
        //expect(component.tarefas).toBeTruthy();
        expect(component.tarefas.length).toEqual(2);
    });
});
