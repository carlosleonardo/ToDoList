import { Component } from '@angular/core';

@Component({
    selector: 'app-buscador',
    standalone: true,
    imports: [],
    templateUrl: './buscador.component.html',
    styleUrl: './buscador.component.css',
})
export class BuscadorComponent {
    buscar(texto: string) {
        console.log(`Buscando ${texto}`);
    }
}
