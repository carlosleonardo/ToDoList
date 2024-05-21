import { Component, inject, output } from '@angular/core';
import { FiltroService } from '../filtro.service';

@Component({
    selector: 'app-buscador',
    standalone: true,
    imports: [],
    templateUrl: './buscador.component.html',
    styleUrl: './buscador.component.css',
})
export class BuscadorComponent {
    filtroService = inject(FiltroService);
    aoBuscar = output<string>();

    buscar(texto: string) {
        if (texto) {
            this.filtroService.adicionarFiltro({
                nome: 'buscar-nome',
                valor: texto,
                funcaoFiltro: (tarefa) =>
                    tarefa.nome.toLowerCase().includes(texto.toLowerCase()),
            });
        } else {
            this.filtroService.removerFiltro('buscar-nome');
        }
        this.aoBuscar.emit(texto);
    }
}
