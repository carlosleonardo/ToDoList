import { Component, inject, output } from '@angular/core';
import { FiltroService } from '../filtro.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-buscador',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './buscador.component.html',
    styleUrl: './buscador.component.css',
})
export class BuscadorComponent {
    filtroService = inject(FiltroService);
    aoBuscar = output<string>();
    texto = '';

    buscar() {
        if (this.texto) {
            this.filtroService.adicionarFiltro({
                nome: 'buscar-nome',
                valor: this.texto,
                funcaoFiltro: (tarefa) =>
                    tarefa.nome
                        .toLowerCase()
                        .includes(this.texto.toLowerCase()),
            });
        } else {
            this.filtroService.removerFiltro('buscar-nome');
        }
        this.aoBuscar.emit(this.texto);
    }
}
